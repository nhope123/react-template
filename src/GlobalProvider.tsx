import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n.ts';

const theme = createTheme({
  // Add theme customization here if needed
});

interface GlobalProviderProps {
  children: ReactNode;
}

/**
 * GlobalProvider component serves as a wrapper for all providers needed in the application.
 * It includes the ThemeProvider for Material-UI theming and CssBaseline for consistent styling.
 *
 * @component
 * @param {ReactNode} children - The child components to be wrapped by the providers.
 * @returns {JSX.Element} The wrapped child components with applied providers.
 */
const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </ThemeProvider>
  );
};

export default GlobalProvider;
