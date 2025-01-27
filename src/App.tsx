import { Box, type SxProps, type Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import viteLogo from './assets/vite.svg';
import reactLogo from './assets/react.svg';

const rootSx: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
};

const App = () => {
  const { t } = useTranslation(['translation']);

  return (
    <Box sx={rootSx}>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer  noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('generic.welcome')}</h1>
    </Box>
  );
};

export default App;
