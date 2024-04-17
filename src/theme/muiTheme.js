import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'black',
          textTransform: 'none',
        },
        contained: {
          backgroundColor: '#F7F9FB',
          ':hover': {
            backgroundColor: '#8FC1E3',
          }
        }
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black', // Change border color when focused
          },
          '& .MuiInputLabel-root.Mui-focused': {
            //color: '#F7F9FB',
            color: 'black',
          },
        },
      },
    },
  },
});

export default theme;