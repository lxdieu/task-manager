import colors from "../colors";
import { PaletteMode } from "@mui/material";

const palette = {
  primary: {
    main: '#0052cc',
    light: colors.sb70,
    dark: colors.sb90,
  },
  secondary: {
    main: colors.mn10,
    light: colors.ln50,
    dark: colors.mn20,
  },
  info: {
    main: colors.sb40,
    light: colors.sb40,
    dark: colors.sb40,
  },
  success: {
    main: colors.sg50,
    light: colors.sg50,
    dark: colors.sg50,
  },
  warning: {
    main: colors.sy50,
    light: colors.sy50,
    dark: colors.sy50,
  },
  error: {
    main: colors.sr50,
    light: colors.sr50,
    dark: colors.sr50,
  },
  mode: "light" as PaletteMode,
  text:{
    primary:colors.sc50,
    secondary:colors.sb100,
    disabled:colors.sc50,
  },
};  

export default palette;
