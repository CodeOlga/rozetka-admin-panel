import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";

import { users } from "../../constants/users";
import logo from "../../assets/logo-green.svg";

import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    setIsLoading(true);

    setTimeout(() => {
      const user = users.find(
        (user) =>
          user.name.toLowerCase().trim() ===
            formData.name.toLowerCase().trim() &&
          user.password.trim() === formData.password.trim()
      );

      if (user) {
        const token = btoa(user.name);
        localStorage.setItem("token", token);

        navigate("/products");
      } else {
        setError("Incorrect username or password");
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Box
        component="section"
        sx={{
          width: 500,
          margin: "0 auto",
          padding: "80px 120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "primary.textWhite",
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            width: 240,
            height: 40,
            marginBottom: "86px",
          }}
        >
          <img src={logo} alt="Rozetka logo" />
        </Box>

        <LoginForm onSubmit={onSubmit} />

        {isLoading ? (
          <CircularProgress />
        ) : (
          <Typography color="error" variant="body1">
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Login;
