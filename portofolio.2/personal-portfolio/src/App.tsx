import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParallaxSection from './components/ParallaxSection';
import ThreeDEffects from './components/ThreeDEffects';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <ParallaxSection />
        <ThreeDEffects />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Hero} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;