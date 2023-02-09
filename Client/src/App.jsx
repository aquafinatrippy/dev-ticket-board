import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container maxWidth="sm" sx={{ margin: "100px auto 0 auto" }}>
          {" "}
          <Box
            sx={{
              height: "100vh",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
        </Container>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
