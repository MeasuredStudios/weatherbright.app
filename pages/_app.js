import GlobalStyles from './../styles/GlobalStyles';
import { ThemeProvider } from '../components/ui/themeContext';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
