import { useCallback, useEffect, useRef, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import AddBlogModal from "./AddBlogModal";
import "../../App.css";
import BlogItems from "./BlogItems";
import { PROTECTED_URL } from "config/axios.config";

export interface IBlog {
  _id: string;
  title: string;
  content: string;
  create_date?: string;
  comments?: [];
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

  // const handleSelect = useCallback(
  //   (item) => (e) => {
  //     select(e, item);
  //     const index = options.findIndex(
  //       (findItem) => findItem.value === item.value,
  //     );
  //     setIndex(index);
  //   },
  //   [state],
  // );

  // <button onClick={handleSelect(item)} className="ml-1">

  const getBlogs = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data: blogs } = await PROTECTED_URL.get("/blogs");

      if (mounted.current) {
        setIsLoading(false);
        setBlogList(blogs);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
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
          <AddBlogModal modalTitle="Add New Post" setBlogList={setBlogList} />
        </Grid>
        {blogList && (
          <>
            <Grid item container xs={12}>
              <BlogItems
                blogList={blogList}
                pagination={paginationObject}
                isLoading={isLoading}
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
