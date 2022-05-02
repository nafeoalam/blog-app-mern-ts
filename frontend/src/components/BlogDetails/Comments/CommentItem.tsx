import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { IComment } from ".";

interface IProps {
  name: string;
  text: string;
  date: string;
  comments?: Array<IComment>;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CommentItem = ({ name, text, date, comments = [] }: IProps) => {
  return (
    <>
      <Card>
        <CardContent>
          <Grid container>
            <Grid container spacing={0} minHeight={50}>
              <Grid item xs={2} md={1} spacing={0}>
                <Typography paddingLeft={1}>
                  <Avatar>H</Avatar>
                </Typography>
              </Grid>
              <Grid item xs={10} md={11}>
                <Typography color={"blue"} fontWeight={800}>
                  {name}
                </Typography>
                <Typography color={"gray"}>
                  {new Date(date).toUTCString()}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} padding={2}>
                <Typography paddingTop={2} color={'black'}>{text}</Typography>
                <Typography paddingTop={2} color={'blue'} fontWeight={400}>{"Reply"}</Typography>
              </Grid>
            </Grid>

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
        </CardContent>
      </Card>
    </>
  );
};

export default CommentItem;
