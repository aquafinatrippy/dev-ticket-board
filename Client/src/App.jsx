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

  return (
    <div className="App">
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
              </Routes>
            </Box>
          </Container>
        </Box>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
