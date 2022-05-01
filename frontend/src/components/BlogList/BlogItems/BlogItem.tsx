import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IBlog } from "..";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

interface IProps {
  blog: IBlog;
}

const BlogItem = ({ blog }: IProps) => {
  return (
    <Grid item xs={6}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {blog.create_date ? new Date(blog.create_date).toLocaleString() : ""}
          </Typography>
          <Typography variant="body2">{blog.content}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/blogs/${blog._id}`}>Blog detail</Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogItem;
