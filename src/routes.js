import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home'; // rota /
import Contact from './pages/Contact'; // contato rota /contact
import About from './pages/About'; // sobre nós rota /about

import Error404 from './pages/Error404';


function Routes() {
  return (
    <Router>
      <Navbar />
      <div className="container-xl">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/contact/:nome?/:sobrenome' component={Contact} />
          <Route path='/about' component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
