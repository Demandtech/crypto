import './App.css';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import About from './components/aboutme/About';
import Tokenomic from './components/tokenomics/Tokenomic';
import Roadmap from './components/roadmap/Roadmap';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Tokenomic />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
