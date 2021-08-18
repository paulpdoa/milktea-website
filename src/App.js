import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import {Switch, Route} from 'react-router-dom';
import SocialMedia from "./components/SocialMedia";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Header />
            <Products />
            <SocialMedia />
            <Contact />
            <Footer />
          </Route>
        </Switch>
        
    </>
  );
}

export default App;
