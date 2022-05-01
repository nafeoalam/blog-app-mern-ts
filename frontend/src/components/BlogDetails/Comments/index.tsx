import React from "react";
import CommentItem from "./CommentItem";

export interface IComment {
  name: string;
  text: string;
  date: string;
  comments?: Array<IComment>;
}

interface IProps {
  comments?: IComment[];
}

const Comments = ({ comments }: IProps) => {
  // const comments: IComment[] = [
  //   {
  //     name: "Nafeo",
  //     text: "Hellow Nafeo",
  //     comments: [
  //       {
  //         name: "Arish Mahmood Bhuiyanm",
  //         text: "Hellow Arish",
  //       },
  //       {
  //         name: "Arham Mahmood Bhuiyan",
  //         text: "Hellow Arham",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Snigdha",
  //     text: "Fariha Haque",
  //   },
  // ];

  return (
    <>
      {comments &&
        comments.map((comment, index) => {
          return (
            <>
              <CommentItem
                key={index}
                name={comment.name}
                text={comment.text}
                date={comment.date}
                comments={comment.comments}
              />
              <br />
            </>
          );
        })}
    </>
  );
};

export default Comments;
