import GlobalStyles from '../utils/styles/GlobalStyles';
import { ThemeProvider } from '../utils/context/themeContext';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
