import { Button } from "../components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="fixed inset-0 z-0 h-screen">
    <section className=" relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mx-auto px-6 animate-fade-in">
        <h1
          className="text-5xl    md:text-8xl font-bold font-heading mb-6 opacity-0 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-[#E5E7EB]">Hi, I'm Shankari</span>
        </h1>
        <h2
          className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slide-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            I build Modern Web Interfaces
          </span>
        </h2>

        {/* <Badge variant="secondary" className="mb-6 animate-slide-up opacity-0" style={{ animationDelay: '1.0s' }}>
          Frontend Developer specializing in React.js | Actively Seeking New Opportunities
        </Badge> */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 mb-12 animate-scale-in"
          style={{ animationDelay: "1.4s" }}
        >
          <Button
            size="lg"
            href="https://drive.google.com/file/d/1HSfvN77jcon429JK27us9UDziUQkcwJZ/view?usp=sharing"
            target="_blank"
            className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
          >
            Download Resume
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-80"
        style={{ animationDelay: "2s" }}
      />
    </section>
    </div>
  );
};

export default Hero;
 