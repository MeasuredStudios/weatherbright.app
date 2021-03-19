import GlobalStyles from '../utils/styles/GlobalStyles';
import { ThemeProvider } from '../utils/context/themeContext';
import { CityProvider } from '../utils/context/cityContext';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <CityProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </CityProvider>
  </ThemeProvider>
);

export default App;
