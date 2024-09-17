import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: { main: 'rgb(102, 157, 246)' },
    background: { paper: 'rgb(5, 30, 52)' },
  },
  spacing: 8, // Default is 8px; you can set it to any value (in px)
  shape: {
    borderRadius: 8, // Rounded corners, you can set this to customize
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 960, // Medium devices (small laptops)
      lg: 1280, // Large devices (desktops)
      xl: 1920, // Extra large devices (large desktops)
    },
  },
});

export default theme;
