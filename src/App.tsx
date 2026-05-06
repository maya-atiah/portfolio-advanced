import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/theme';

function App() {
  return (
    <ThemeProvider>
      <div className='min-h-screen bg-blue-600'>
        <div>
          <div className='rounded-xl border border-border bg-card p-6 shadow-lg space-y-4'>
            <h1 className='text-2xl font-serif'>Theme</h1>

            <p className='text-muted-foreground'>card</p>
            <span className='text-foreground'>MAYA </span>

            <div className='grid grid-cols-2 gap-3 text-sm'>
              <div className='p-3 rounded bg-primary text-primary-foreground'>
                Primary
              </div>

              <div className='p-3 rounded bg-secondary text-secondary-foreground'>
                Secondary
              </div>

              <div className='p-3 rounded bg-accent text-accent-foreground'>
                Accent
              </div>

              <div className='p-3 rounded bg-muted text-muted-foreground'>
                Muted
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
