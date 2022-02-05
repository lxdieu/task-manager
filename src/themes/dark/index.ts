import { createTheme } from "@mui/material";
import typography from "../typography";
import breakpoints from "../breakpoints";
import palette from "./palette";
import components from "./components";

export default createTheme({
  typography: { ...typography },
  palette: { ...palette },
  breakpoints: { values: { ...breakpoints } },
  spacing: 4,
  components: { ...components }
});
