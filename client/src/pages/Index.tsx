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
import InteractiveBackground from '@/components/InteractiveBackground';
import CursorFollower from '@/components/CursorFollower';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <InteractiveBackground />
      <CursorFollower />
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
