import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Header />
            <Products />
            <Contact />
            <Footer />
          </Route>
        </Switch>
        
    </>
  );
}

export default App;
