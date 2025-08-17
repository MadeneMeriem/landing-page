import './App.css';
import Home from './components/home';
import About from './components/about';
import Work from  './components/work';
import Testimonials from './components/testimonials';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
