
import './App.css';


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from "react-router-dom";
import LandingPage from './LandingPage';
import Home from './Home'
import RegisterUser from './RegisterUser'


const App = ()=> {



  return (

<div className="app">
    




<Router>

<Link to="/"> 
<div className="header">
   <h1>AceUp</h1> 
   <h4>...a delivery service company</h4>
</div>   
</Link>


  <Switch>

          <Route exact path='/'>
          <LandingPage />
          </Route>

          <Route exact path='/RegisterUser'>
          <RegisterUser/>
          </Route>

          <Route exact path='/Home'>
          <Home />
          </Route>

  </Switch>

  </Router>


</div>

  );
}

export default App;
