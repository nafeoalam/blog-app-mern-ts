import { IBlog } from "components/BlogList";
import CommentItem from "./CommentItem";

export interface IComment {
  commentId: string;
  name: string;
  text: string;
  date: string;
  comments: Array<IComment>;
}

interface IProps {
  blog: IBlog;
}

const Comments = ({ blog }: IProps) => {
  return (
    <>
      {blog.comments
        .slice(0)
        .reverse()
        .map((comment, index) => {
          return (
            <div key={`${comment.commentId}-${index}-div`}>
              <CommentItem
                key={`${comment.commentId}-${index}`}
                name={comment.name}
                text={comment.text}
                date={comment.date}
                comments={comment.comments}
                previousCommentIds={[comment.commentId]}
                blog={blog}
              />
              <br />
            </div>
          );
        })}
    </>
  );
};

export default Comments;
