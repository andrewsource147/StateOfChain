import { combineReducers } from 'redux'
import questionReducer from './questionReducer';
import answerReducer from "./answerReducer";
import userReducer from "./userReducer";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
  question: questionReducer,
  answer: answerReducer,
  user: userReducer,
  common: commonReducer
})

export default rootReducer
