import Navbar from './components/Navbar';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <>
      <Navbar />
      <div className="container-xl">
        <Home />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
