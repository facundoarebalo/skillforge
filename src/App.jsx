import AppRouter from './routes/AppRouter';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='min-h-screen bg-zinc-950'>
      <Navbar />
      <AppRouter />
    </div>


  );
}

export default App;
