import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Facilities from './components/Facilities';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Facilities />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;