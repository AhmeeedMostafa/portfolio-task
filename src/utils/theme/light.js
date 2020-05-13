import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    common :{
      black:"#000",
      white:"#fff"
    }
  ,
  background: {
    paper: "#fff",
    default: "#ffffcf"
  },
  primary: {
    light: "rgba(255, 229, 194, 1)",
    main: "rgba(245, 166, 35, 1)",
    dark: "rgba(211, 132, 0, 1)",
    contrastText: "#fff"},
    secondary: {
      light: "rgba(107, 38, 121, 1)",
      main: "rgba(74, 144, 226, 1)",
      dark: "#c51162",
      contrastText:"#fff"
    },
    error :{
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    type: 'light',
  }
});