import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <Badge variant="secondary" className="mb-6 animate-slide-up">
          Available for Opportunities
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 animate-slide-up">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
          Crafting beautiful, responsive web experiences with modern technologies. 
          4+ years of turning ideas into pixel-perfect reality.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
          <Button size="lg" className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="hover:bg-card transition-all duration-300">
            Download Resume
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 justify-center animate-fade-in">
          <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;