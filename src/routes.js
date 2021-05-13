import {Route, BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home'; // rota /
import Contact from './pages/Contact'; // contato rota /contact
import About from './pages/About'; // sobre nós rota /about


function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-xl">
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </div>
    </BrowserRouter>
  );
}

export default Routes;
