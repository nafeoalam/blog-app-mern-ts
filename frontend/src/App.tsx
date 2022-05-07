import { Container, CssBaseline, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Container disableGutters>
      <CssBaseline />
      <Stack direction="row" spacing={6}>
        <Link to="/blogs">
          <h4>Blogs</h4>
        </Link>
      </Stack>

      <Outlet />
      <br />
    </Container>
  );
};

export default App;
