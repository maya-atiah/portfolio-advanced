import { BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/theme';
import MainRoutes from './routes/MainRoutes';
import { Toaster } from 'sonner';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Toaster position='top-right' richColors />
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
