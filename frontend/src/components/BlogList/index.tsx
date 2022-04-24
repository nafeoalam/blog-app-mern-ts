import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid, Pagination } from "@mui/material";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import BlogItem from "./BlogItem";
import NestedModal from "./AddBlogModal";

export interface IBlog {
  title: string;
  content: string;
  date: string;
}

const BlogListBlock = () => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [blogList, setBlogList] = useState<Array<IBlog>>([]);

  const getBlogs = useCallback(async () => {
    //Service Call Here
    // const data = await yourAsyncFunction(...);
    const blogs = [
      {
        title: "Blog 1",
        content: "Blog 1 Content",
        date: "2/2/2022",
      },
      {
        title: "Blog 2",
        content: "Blog 2 Content",
        date: "2/2/2022",
      },
      {
        title: "Blog 2",
        content: "Blog 2 Content",
        date: "2/2/2022",
      },
      {
        title: "Blog 2",
        content: "Blog 2 Content",
        date: "2/2/2022",
      },
      {
        title: "Blog 2",
        content: "Blog 2 Content",
        date: "2/2/2022",
      },
    ];
    if (mounted.current) {
      setLoading(false);
      setBlogList(blogs);
    }
  }, []);

  useEffect(() => {
    mounted.current = true;
    getBlogs();
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item container xs={12}>
          <NestedModal title="Add New Blog" />
        </Grid>
        <Grid item container xs={12}>
          {!loading ? (
            <Grid container spacing={2}>
              {blogList.map((blog: IBlog) => (
                <BlogItem blog={blog} />
              ))}
            </Grid>
          ) : loading ? (
            <SkeletonTheme highlightColor="#fff">
              <Skeleton count={1} duration={2} height={40} />
            </SkeletonTheme>
          ) : (
            ""
          )}
        </Grid>
        <Grid item container xs={12} justifyContent="center">
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Grid>
      </Grid>
    </>
  );
};

export default BlogListBlock;
