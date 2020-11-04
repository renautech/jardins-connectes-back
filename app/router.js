const { Router } = require('express');
const router = Router();
const userController = require('./controllers/userController');
const { insertUserSchema, signinSchema } = require('./schemas/userschema');
const { validateBody } = require('./services/validator');
const { flush } = require('./cache/cacheStrategy');
const { isAuthentificate } = require('./services/session');
const { uploadSchema } = require('./schemas/uploadSchema');
const {
    userRouter,
    operationRouter,
    operationTypeRouter,
    boardRouter,
    photoRouter,
    varietyRouter,
    familyRouter
} = require('./routers');
const mainController = require('./controllers/mainController');
const upload = require('./services/upload');

router.use('/users', userRouter);
router.use('/operations', operationRouter);
router.use('/operation_types', operationTypeRouter);
router.use('/boards', boardRouter);
router.use('/photos', photoRouter);
router.use('/families', familyRouter);
router.use('/varieties', varietyRouter);

// Authentification
router.post('/signup', upload, validateBody(insertUserSchema, uploadSchema), flush, userController.signup);
router.post('/signin', validateBody(signinSchema), userController.signin);
router.delete('/signout', isAuthentificate, userController.signout);

router.use(mainController.notFound);

module.exports = router;