import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Coursework from '@/components/Coursework';
import Activities from '@/components/Activities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="portfolio-site min-h-screen bg-[#0a0a0f] text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Coursework />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
