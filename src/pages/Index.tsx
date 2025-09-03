import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section id="home" className="z-0 bg-background">
        <Hero />
      </section>

      <section id="about" className=" top-[100vh] relative z-1  bg-background">
        <About />
      </section>

      <section
        id="experience"
        className=" top-[100vh] relative   bg-background"
      >
        <Skills />
      </section>

      <section id="projects" className=" top-[100vh] relative  ">
        <Projects />
      </section>

      {/* <section id="contact" className=" top-[100vh] relative ">
        <Contact />
      </section> */}
    </div>
  );
};

export default Index;
