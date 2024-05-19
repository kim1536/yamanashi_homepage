import {BrowserRouter} from 'react-router-dom';
import {AppRouter} from './routes';
import {LanguageProvider} from './Provider/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
