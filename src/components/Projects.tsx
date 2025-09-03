import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink } from "lucide-react";
// import StarfieldCanvas from "./ui/stars";
import Trade from "@/assets/trade.png";
const Projects = () => {
  const projects = [
    {
      title: "Kana Perps - Decentralized Trading Platform",
      description:
        "Built a responsive, single-page application (SPA) from the ground up using React.js and TypeScript.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Web3.js"],
      image: Trade,
      github: "#",
      live: "https://www.kana.trade/",
    }, 
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <StarfieldCanvas speed={1} intensity={0.8} /> */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl   font-bold font-heading mb-4  text-[hsl(265,89%,78%)]">
              Featured Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work 
            </p>
          </div>

          <div className="flex justify-center">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className=" flex flex-col md:flex-row max-w-5xl w-full group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-full md:w-[55%] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[600px] h-[400px] scale-100   object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="w-full md:w-[45%] flex flex-col p-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="group-hover:text-primary text-2xl transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {/* <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button> */}
                      <Button href="https://www.kana.trade/" target="_blank" size="sm" className="flex-1 bg-gradient-primary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
