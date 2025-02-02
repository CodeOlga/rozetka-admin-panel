import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#44B26F",
      textWhite: "#ffffff",
      textGrey: "#726969",
      textLightGrey: "#A58F8F",
      textGreen: "#05BC52",
      textRed: "#FC5B00",
      bgRed: "#FB0000",
      bgGrey: "#D9D9D9",
      bgDarkGrey: "#D8D5D5",
      bgGreen: "#0EC86F",
      bgLightGreen: "#3CD78C",
    },
  },
});

export default theme;
