const { Router } = require('express');
const router = Router();
const {
    userRouter,
    operationRouter,
    operationTypeRouter,
    boardRouter,
    photoRouter,
    varietyRouter,
    familyRouter
} = require('./routers');

router.use(userRouter);
router.use(operationRouter);
router.use(operationTypeRouter);
router.use(boardRouter);
router.use(photoRouter);
router.use(familyRouter);
router.use(varietyRouter);

module.exports = router;