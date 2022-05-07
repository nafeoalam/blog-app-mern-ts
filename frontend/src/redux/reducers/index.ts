import { IBlog } from "components/BlogList";
import { combineReducers } from "redux";

import blogReducer from "./blogReducer";

export interface IRootState {
  blogs: any;
}

export interface IAction {
  type: string;
  payload?: any;
}

export const reducers = combineReducers({ blogs: blogReducer });
