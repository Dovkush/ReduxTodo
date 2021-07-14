import { combineReducers } from "redux";
import taskListReducer from "./taskList/taskListReducer";

const rootReducer = combineReducers({
    Tasklist: taskListReducer
})
export default rootReducer;