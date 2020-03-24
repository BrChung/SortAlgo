import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, green } from '@material-ui/core/colors';

const uiTheme = createMuiTheme({
  palette: {
    primary: {
        light: '#3B3B3D',
        main: '#252527',
        dark: '#1A1A1B',
    },
    secondary: {
        light: '#315981',
        main: '#043565',
        dark: '#1E152A',
    },
    warning: {
        main: '#FFD197',
        dark: '#E8A256',
    },
      error: {
        xLight: red[50],
        main: red[500],
        dark: red[700],
    },
      success: {
        xLight: green[50],
        main: green[500],
        dark: green[700],
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

const fontHeader = {
  color: uiTheme.palette.text.primary,
  fontWeight: uiTheme.typography.fontWeightRegular,
  fontFamily: uiTheme.typography.fontFamily,
};

const theme = {
  ...uiTheme,
  palette: {
    ...uiTheme.palette,
    background: {
      ...uiTheme.palette.background,
      default: uiTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...uiTheme.typography,
    fontHeader,
    h1: {
      ...uiTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...uiTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...uiTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...uiTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...uiTheme.typography.h5,
      fontSize: 20,
      fontWeight: uiTheme.typography.fontWeightLight,
    },
    h6: {
      ...uiTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...uiTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...uiTheme.typography.body2,
      fontWeight: uiTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...uiTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;