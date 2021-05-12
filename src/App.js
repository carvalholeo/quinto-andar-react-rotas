import Navbar from './components/Navbar';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import Routes from './routes'


function App() {
  return (
    <>
      <Navbar />
      <div className="container-xl">
        <Routes />
      </div>
    </>
  );
}

export default App;
