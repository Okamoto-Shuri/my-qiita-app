import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme'; // インポートパスが正しいか確認

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;