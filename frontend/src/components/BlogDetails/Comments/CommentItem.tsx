import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { IComment } from ".";
import { useState } from "react";
import { IAddNewCommentForm } from "components/BlogDetails";
import { PROTECTED_URL } from "config/axios.config";

interface IProps {
  name: string;
  text: string;
  date?: string;
  comments?: Array<IComment>;
  commentId: string;
}

const CommentItem = ({
  name,
  text,
  date,
  comments = [],
  commentId,
}: IProps) => {
  const [isReplyActive, setIsReplyActive] = useState<boolean>(false);

  const [addNewCommentForm, setAddNewCommentForm] =
    useState<IAddNewCommentForm>({
      name: "",
      text: "",
      commentId: new Date().getTime().toString(),
    });

  const handleCommentSubmit = async () => {
    try {
      console.log(addNewCommentForm)
      console.log(commentId)
      // const { data: updatedBlog } = await PROTECTED_URL.put(
      //   `/blogs/${blogId}/comments`,
      //   {
      //     comments: addNewCommentForm,
      //   }
      // );

      // setBlog(updatedBlog);
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Grid container minHeight={50}>
            <Grid item xs={2} md={1}>
              <Avatar>H</Avatar>
            </Grid>
            <Grid item xs={10} md={11}>
              <Typography color={"blue"} fontWeight={800}>
                {name}
              </Typography>
              <Typography color={"gray"}>
                {date && new Date(date).toUTCString()}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography padding={2} color={"black"}>
                {text}
              </Typography>
              {!isReplyActive && (
                <Button onClick={() => setIsReplyActive(true)}>
                  {"Reply"}
                </Button>
              )}
              {/* ADD a comment */}

              {isReplyActive && (
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
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
                      <Grid item xs={12} gap={2}>
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
                        <Button
                          size="small"
                          onClick={() => setIsReplyActive(false)}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        </CardContent>
        {comments?.length > 0 && (
          <CardContent>
            {comments.map((comment, index) => {
              return (
                <div key={`${comment.commentId}-${index}-div`}>
                  <CommentItem
                    key={`${comment.commentId}-${index}`}
                    name={comment.name}
                    text={comment.text}
                    date={comment.date}
                    comments={comment.comments}
                    commentId={comment.commentId}
                  />
                  <br />
                </div>
              );
            })}
          </CardContent>
        )}
      </Card>
    </>
  );
};

export default CommentItem;
