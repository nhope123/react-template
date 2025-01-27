import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FC, ReactNode } from 'react';

const theme = createTheme({
  // Add theme customization here if needed
});

interface AppWrapperProps {
  children: ReactNode;
}

/**
 * AppWrapper component serves as a wrapper for all providers needed in the application.
 * It includes the ThemeProvider for Material-UI theming and CssBaseline for consistent styling.
 *
 * @component
 * @param {ReactNode} children - The child components to be wrapped by the providers.
 * @returns {JSX.Element} The wrapped child components with applied providers.
 */
const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppWrapper;
