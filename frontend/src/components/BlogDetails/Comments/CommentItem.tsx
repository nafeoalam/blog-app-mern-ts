import { Grid } from "@mui/material";
import { IComment } from ".";

interface IProps{
    name: string
    text: string
    date: string
    comments?: Array<IComment>;
}

const CommentItem = ({ name, text, date, comments = [] }: IProps) => {
  return (
    <>
      <Grid container>
        <span>{name}</span>
        <span>{text}</span>
        <span>{date}</span>
        {comments.map((comment, index) => {
          return (
            <CommentItem
              key={index}
              name={comment.name}
              text={comment.text}
              date={comment.date}
              comments={comment.comments}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default CommentItem;
