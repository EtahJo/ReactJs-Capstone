import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import './components/styles.css';

function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
    <Herosection/>
    <Highlights/>
    <Testimonial/>
    <About/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}

export default App;
