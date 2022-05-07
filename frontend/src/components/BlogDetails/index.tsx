import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import { Card, CardContent, Grid, Input, TextField } from "@mui/material";
import { IBlog } from "components/BlogList";
import { PROTECTED_URL } from "config/axios.config";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import Comments, { IComment } from "./Comments";

export interface IAddNewCommentForm extends IComment {
  name: string;
  text: string;
  commentId: string;
}

const BlogDetailsBlock = () => {
  const mounted = useRef(false);
  const { blogId } = useParams<any>();
  const [blog, setBlog] = useState<IBlog>();
  const [isBlogLoading, setIsBlogLoading] = useState<boolean>(false);

  const [addNewCommentForm, setAddNewCommentForm] =
    useState<IAddNewCommentForm>({
      name: "",
      text: "",
      comments: [],
      date: new Date().toISOString(),
      commentId: new Date().getTime().toString(),
    });

  const getBlogById = useCallback(async () => {
    try {
      setIsBlogLoading(true);
      const { data: blog } = await PROTECTED_URL.get(`/blogs/${blogId}`);

      console.log(blog, "Current blog");
      if (mounted.current) {
        setBlog(blog);
        setIsBlogLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsBlogLoading(false);
    }
  }, [blogId]);

  useEffect(() => {
    mounted.current = true;
    getBlogById();
    return () => {
      mounted.current = false;
    };
  }, [blogId]);

  const handleCommentSubmit = async () => {
    try {
      const { data: updatedBlog } = await PROTECTED_URL.put(
        `/blogs/${blogId}/comments`,
        {
          comments: addNewCommentForm,
        }
      );

      setBlog(updatedBlog);
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <>
      {blog ? (
        <>
          <Grid minHeight={200}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </Grid>
          {/* ADD a comment */}
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h2>Add a comment</h2>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    onChange={(e) =>
                      setAddNewCommentForm({
                        ...addNewCommentForm,
                        name: e.currentTarget.value,
                        commentId: new Date().getTime().toString(),
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Comment"
                    rows={4}
                    variant="outlined"
                    multiline
                    fullWidth
                    onChange={(e) =>
                      setAddNewCommentForm({
                        ...addNewCommentForm,
                        text: e.currentTarget.value,
                        commentId: new Date().getTime().toString(),
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <LoadingButton
                    size="small"
                    color="info"
                    onClick={handleCommentSubmit}
                    loading={false}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                    variant="contained"
                    disabled={
                      addNewCommentForm.name === "" ||
                      addNewCommentForm.text === ""
                    }
                  >
                    Submit
                  </LoadingButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <br />
          {blog?.comments.length > 0 && (
            <Card>
              <CardContent>
                <Comments blog={blog} />
              </CardContent>
            </Card>
          )}
        </>
      ) : isBlogLoading ? (
        <Skeleton height={200} />
      ) : (
        <h4>No Content</h4>
      )}
    </>
  );
};

export default BlogDetailsBlock;
