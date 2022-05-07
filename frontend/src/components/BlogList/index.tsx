import { useCallback, useEffect, useRef, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import AddBlogModal from "./AddBlogModal";
import "../../App.css";
import BlogItems from "./BlogItems";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "redux/actions/blogActions";
import { IRootState } from "redux/reducers";

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  create_date?: string;
  comments: any[];
}

export interface IPaginationObject {
  currentPage: number;
  itemsPerPage: number;
}

const BlogListBlock = () => {
  const dispatch = useDispatch<any>();
  const { data: blogList } = useSelector((state: IRootState) => state.blogs);

  useEffect(() => {
    //if (!blogList || (blogList && blogList.length === 0)) { //Prevent from dispatching each time 
      dispatch(getBlogs());
    //}
  }, [dispatch]);

  const [paginationObject, setPaginationObject] = useState<IPaginationObject>({
    currentPage: 1,
    itemsPerPage: 6,
  });

  return (
    <>
      <Grid container spacing={4}>
        <Grid item container xs={12}>
          <AddBlogModal modalTitle="Add New Post" />
        </Grid>
        {blogList && (
          <>
            <Grid item container xs={12}>
              <BlogItems
                blogList={blogList}
                pagination={paginationObject}
              />
            </Grid>
            <Grid item container xs={12} justifyContent="center">
              <Pagination
                count={Math.ceil(
                  blogList.length / paginationObject.itemsPerPage
                )}
                variant="outlined"
                shape="rounded"
                onChange={(event, value) =>
                  setPaginationObject({
                    ...paginationObject,
                    currentPage: value,
                  })
                }
              />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default BlogListBlock;
