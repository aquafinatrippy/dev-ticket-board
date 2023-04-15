import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { Navbar } from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NewTicket } from "./views/NewTicket";
import { PrivateRoute } from "./components/PrivateRoute";
import { Tickets } from "./views/Tickets";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../src/styles/home.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  overrides: {
    MuiInput: {
      root: {
        background: "black", // Replace with your desired background color
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          width={"100vw"}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Container fixed sx={{ margin: "100px auto 0 auto" }}>
            {" "}
            <Box display="flex" sx={{ justifyContent: "center" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/new-ticket" element={<PrivateRoute />}>
                  <Route path="/new-ticket" element={<NewTicket />} />
                </Route>
                <Route path="/tickets" element={<PrivateRoute />}>
                  <Route path="/tickets" element={<Tickets />} />
                </Route>
              </Routes>
            </Box>
          </Container>
        </Box>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
