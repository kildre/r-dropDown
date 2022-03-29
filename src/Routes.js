import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Home from './Pages/Home';
import Services from './Pages/Services';
import Consulting from './Pages/Services/Consulting/Consulting';
import Design from './Pages/Services/Design/Design';
import Development from './Pages/Services/Development/Development';
import Marketing from './Pages/Services/Marketing/Marketing';
import Products from './Pages/Products';
import ContactUs from './Pages/ContactUs';
import SignUp from './Pages/SignUp.js';
const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        {/* Nested Routes */}
        <Route path="/services/consulting">
          <Consulting />
        </Route>
        <Route path="/services/design">
          <Design />
        </Route>
        <Route path="/services/development">
          <Development />
        </Route>
        <Route path="/services/Marketing">
          <Marketing />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
