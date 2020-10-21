const userRouter = require('./userRouter');
const operationRouter = require('./operationRouter');
const operationTypeRouter = require('./operationTypeRouter');
const familyRouter = require('./familyRouter');
const varietyRouter = require('./varietyRouter');
const boardRouter = require('./boardRouter');
const photoRouter = require('./photoRouter');

module.exports = {
    userRouter,
    operationRouter,
    operationTypeRouter,
    photoRouter,
    boardRouter,
    varietyRouter,
    familyRouter
}