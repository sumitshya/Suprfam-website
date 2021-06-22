import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import WorkScreen from "./screens/WorkScreen";
import AboutScreen from "./screens/AboutScreen";
import BlogScreen from "./screens/BlogScreen";

// Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import Footer from "./components/Footer";

function App() {

  const [ sideToggle, setSideToggle ] = useState(false);


  const handleToggle = (event) => {
    setSideToggle(!sideToggle);
  } 

  return (
    <Router>
      {/* Navbar */}
      <Navbar click={handleToggle}/>
      {/* SideDrawer */}
      <SideDrawer show={sideToggle} click={handleToggle}/>
      {/* Backdrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/work" component={WorkScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/blog" component={BlogScreen} />
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
      <Footer />
    </Router>
  );
}

export default App;
