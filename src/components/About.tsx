import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern standards."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-browser compatibility."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Passionate Frontend Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With 4+ years of experience in frontend development, I specialize in creating 
              beautiful, responsive web applications that solve real-world problems. My journey 
              started with curiosity about how websites work, and it has evolved into a passion 
              for crafting exceptional digital experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, thoughtful design, and continuous learning. 
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="outline">React Enthusiast</Badge>
              <Badge variant="outline">Open Source Contributor</Badge>
              <Badge variant="outline">UI/UX Advocate</Badge>
              <Badge variant="outline">Problem Solver</Badge>
            </div>
          </div>
          
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow-accent transition-all duration-300">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;