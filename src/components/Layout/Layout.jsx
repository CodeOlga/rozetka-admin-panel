import { Provider } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";

import theme from "../../theme";
import { store } from "../../redux/store";

import Header from "../Header/Header";

const Layout = () => {
  const location = useLocation();
  const showHeader = location.pathname !== "/login";

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {showHeader && <Header />}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            padding: "40px 120px",
            backgroundColor: "primary.main",
          }}
        >
          <Container component="main" maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
