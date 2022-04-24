import { useCallback, useEffect, useRef, useState } from "react";
import { Grid, Pagination, Skeleton } from "@mui/material";
import BlogItem from "./BlogItems/BlogItem";
import NestedModal from "./AddBlogModal";
import "../../App.css";
import BlogItems from "./BlogItems";

export interface IBlog {
  title: string;
  content: string;
  date: string;
}

export interface IPaginationObject {
  currentPage: number;
  itemsPerPage: number;
}

const BlogListBlock = () => {
  const mounted = useRef(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogList, setBlogList] = useState<Array<IBlog>>([]);

  const [paginationObject, setPaginationObject] = useState<IPaginationObject>({
    currentPage: 1,
    itemsPerPage: 6,
  });

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
      setIsLoading(false);
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
        {blogList && <>
          <Grid item container xs={12}>
            <BlogItems
              blogList={blogList}
              pagination={paginationObject}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Pagination
              count={Math.ceil(blogList.length/paginationObject.itemsPerPage)}
              variant="outlined"
              shape="rounded"
              onChange={(event, value) =>
                setPaginationObject({ ...paginationObject, currentPage: value })
              }
            />
          </Grid>
        </>}
      </Grid>
    </>
  );
};

export default BlogListBlock;
