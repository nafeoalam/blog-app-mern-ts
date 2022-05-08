import { FETCH_ALL_BLOGS, UPDATE_BLOG } from "redux/store-constants";
import { IAction } from ".";

const blogReducer = (storeData: any = [], action: IAction) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS:
      return { ...storeData, data: action.payload };
    case UPDATE_BLOG:
      return { ...storeData, data: [...storeData.data, action.payload] };
    default:
      return storeData;
  }
};

export default blogReducer;
