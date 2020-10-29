const { Router } = require('express');
const router = Router();
const userController = require('./controllers/userController');
const { insertUserSchema, signinSchema } = require('./schemas/userschema');
const { validateBody } = require('./services/validator');
const { flush } = require('./cache/cacheStrategy');
const { isAdmin, isAuthentificate } = require('./services/session');
const {
    userRouter,
    operationRouter,
    operationTypeRouter,
    boardRouter,
    photoRouter,
    varietyRouter,
    familyRouter
} = require('./routers');

router.use('/users', userRouter);
router.use('/operations', operationRouter);
router.use('/operation_types', operationTypeRouter);
router.use('/boards', boardRouter);
router.use('/photos', photoRouter);
router.use('/families', familyRouter);
router.use('/varieties', varietyRouter);

// Authentification
router.post('/signup', flush, validateBody(insertUserSchema), userController.signup);
router.post('/signin', validateBody(signinSchema), userController.signin);
router.delete('/signout', isAuthentificate, userController.signout);

module.exports = router;