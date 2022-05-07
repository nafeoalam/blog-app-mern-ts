import CommentItem from "./CommentItem";

export interface IComment {
  commentId: string;
  name: string;
  text: string;
  date?: string;
  comments?: Array<IComment>;
}

interface IProps {
  comments?: IComment[];
}

const Comments = ({ comments }: IProps) => {
  // const comments: IComment[] = [
  //   {
  //     _id: "123",
  //     name: "Nafeo",
  //     text: "Hellow Nafeo",
  //     date: "2022-05-01T18:26:37.618Z",
  //     comments: [
  //       {
  //         _id: "1233",
  //         name: "Arish Mahmood Bhuiyanm",
  //         text: "Hellow Arish",
  //         date: "2022-05-01T18:26:37.618Z",
  //         comments: [
  //           {
  //             _id: "12333",
  //             name: "Arish Mahmood Bhuiyanm",
  //             text: "Hellow Arish",
  //             date: "2022-05-01T18:26:37.618Z",
  //           },
  //           {
  //             _id: "123334",
  //             name: "Arham Mahmood Bhuiyan",
  //             text: "Hellow Arham",
  //             date: "2022-05-01T18:26:37.618Z",
  //           },
  //         ],
  //       },
  //       {
  //         _id: "1234",
  //         name: "Arham Mahmood Bhuiyan",`
  //         text: "Hellow Arham",
  //         date: "2022-05-01T18:26:37.618Z",
  //       },
  //     ],
  //   },
  //   {
  //     _id: "1235",
  //     name: "Snigdha",
  //     text: "Fariha Haque",
  //     date: "2022-05-01T18:26:37.618Z",
  //   },
  // ];

  return (
    <>
      {comments &&
        comments.map((comment, index) => {
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
    </>
  );
};

export default Comments;
