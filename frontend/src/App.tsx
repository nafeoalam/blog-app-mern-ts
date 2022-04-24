import { Container, CssBaseline, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Container disableGutters>
      <CssBaseline />
      <Stack direction="row" spacing={6}>
        <h4>Blog App</h4>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/blogs">Blog</Link>
        </nav>
      </Stack>

      <Outlet />
    </Container>
  );
};

export default App;
