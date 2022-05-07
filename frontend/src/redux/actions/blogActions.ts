import { IBlog } from 'components/BlogList';
import { IAddNewPostForm } from 'components/BlogList/AddBlogModal';
import { PROTECTED_URL } from 'config/axios.config';
import { Dispatch } from 'react';
import { IAction } from 'redux/reducers';
import { FETCH_ALL_BLOGS, UPDATE_BLOG } from '../store-constants';

export const getBlogs = () => async (dispatch:Dispatch<IAction>) => {
  try {
    const { data } = await PROTECTED_URL.get("/blogs");

    dispatch({ type: FETCH_ALL_BLOGS, payload: data });
  } catch (error:any) {
    console.log(error.message);
  }
};



export const setBlogs = (addNewPostForm: IAddNewPostForm) => async (dispatch: Dispatch<IAction>) => {
  try {
      const { data } = await PROTECTED_URL.post("/blogs", {
        ...addNewPostForm,
      });
      dispatch({ type: UPDATE_BLOG, payload: data })
  } catch (error:any) {
    console.log(error.message);

  }
}

