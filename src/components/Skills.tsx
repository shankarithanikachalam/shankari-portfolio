import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Tools & Libraries",
      skills: ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "Supabase"],
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full mb-6`} />
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;