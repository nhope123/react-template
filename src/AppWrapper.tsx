import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { FC, ReactNode } from 'react';

const theme = createTheme({});

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppWrapper;
