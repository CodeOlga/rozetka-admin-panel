import { Box } from "@mui/material";

import logo from "../../assets/logo.svg";

const Header = () => (
  <Box
    component="header"
    sx={{
      padding: "20px 30px",
      backgroundColor: "primary.main",
      borderBottom: "none",
    }}
  >
    <img src={logo} alt="Rozetka logo" />
  </Box>
);

export default Header;
