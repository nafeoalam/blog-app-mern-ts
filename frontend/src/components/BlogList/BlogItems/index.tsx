import { Grid, Skeleton } from "@mui/material";
import React from "react";
import { IBlog, IPaginationObject } from "..";
import BlogItem from "./BlogItem";

interface IProps {
  blogList: IBlog[];
  pagination: IPaginationObject;
  isLoading: boolean;
}

const BlogItems = ({ blogList, pagination, isLoading }: IProps) => {
  // Get current posts
  const indexOfLastPost = pagination.currentPage * pagination.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - pagination.itemsPerPage;
  const currentBlogs = blogList.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <>
      {(!isLoading && currentBlogs) ? (
        <Grid container spacing={2}>
          {currentBlogs.map((blog: IBlog, index) => (
            <BlogItem key={blog._id ? blog._id : `blog-${index}`} blog={blog} />
          ))}
        </Grid>
      ) : isLoading ? (
        <Grid container spacing={2} className="avatarSkeletonContainer">
          {[...new Array(6)].map((item, index) => (
            <Skeleton key={`blogSkeleton-${index}`} className="avatarLoader" height={200} />
          ))}
        </Grid>
      ) : (
        <h4>No Blogs</h4>
      )}
    </>
  );
};

export default BlogItems;
