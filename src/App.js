import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from './features/navbar/Navbar';
import { Logo } from './components/Logo';
import { Users } from './pages/Users';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Contact } from './pages/Contact';
import { Events } from './pages/Events';
import { Login } from './pages/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Logo />
        <Navbar />
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Container dir="rtl" style={{ backgroundColor: 'gray' }}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/events">
                <Events />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Products />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
};

export default App;
