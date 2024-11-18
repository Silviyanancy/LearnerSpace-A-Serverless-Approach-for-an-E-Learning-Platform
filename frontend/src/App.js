import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Amplify
import {Amplify} from 'aws-amplify';

//components
import Landingpage from './components/Landingpage';

//pages
import Home from './pages/Home'
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Errorpage from './pages/Errorpage';

//Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  return (
    <Router>
      <Landingpage />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route
          path="/coursedetails/:id"
          children={<CourseDetails></CourseDetails>}>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <Errorpage />
        </Route>
      </Switch>
    </Router>   
  );
}

export default App;
