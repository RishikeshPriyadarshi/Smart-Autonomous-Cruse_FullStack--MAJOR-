import React, { useState } from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { login } from "../utils/api";
const LoginPage = ({ signup, setLogged, setSignup,setShowHome }) => {
  const [formData, setFormData] = useState({ name: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData);
    console.log("login cred front end", result);

    // Assuming the login function returns some data indicating success or failure
    if (result.data.success) {
      // Update the logged state to true
      setLogged(false);
      setShowHome(true)
    } else {
      // Optionally, you can handle unsuccessful login here
      // Maybe display an error message or reset the form
      console.error("Login failed:", result.error);
    }
  };
  const handleGoToSignup = () => {
    setSignup(true);
    setLogged(false)
  };
  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </form>
      <Button
        onClick={handleGoToSignup}
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 2 }}
      >
        Go to Signup
      </Button>
      </Container>

    </>
  );
};

export default LoginPage;
