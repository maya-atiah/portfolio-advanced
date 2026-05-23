import { BrowserRouter, Routes } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/theme';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
