import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

interface IBlog {
  title: string;
  content: string;
  date: string;
}

const BlogListBlock = () => {
  const [blogList, setBlogList] = useState<Array<IBlog>>([]);

  const getBlogs = useCallback(async () => {
    //Service Call Here
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
    ];
    setBlogList(blogs);
  }, []);

  useEffect(() => {
    getBlogs();

    return () => {
      getBlogs();
    };
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Add New Blog
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link to="/blogs/:id">Blog detail</Link>
        </Grid>
        <Grid item xs={12}>
          {blogList.map((blog: IBlog) => (
            <div>
              <h3>{blog.title}</h3>
              <span>{blog.content}</span>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default BlogListBlock;
