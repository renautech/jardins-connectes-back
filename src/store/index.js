// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import weather from '../middleware/weather';
import loginForm from '../middleware/loginForm';
import signupForm from '../middleware/signupForm';
import myGarden from '../middleware/myGarden';
import operations from '../middleware/operations';
import profile from '../middleware/profile';
import profileEdit from '../middleware/profileEdit';
import operationList from '../middleware/operationList';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    weather,
    loginForm,
    signupForm,
    myGarden,
    operations,
    profile,
    profileEdit,
    operationList,
    thunk,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
