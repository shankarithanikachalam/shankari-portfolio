import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import KanaLogo from "../assets/kanalabs-icon.svg";
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Zustand", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "npm", "ESLint", "Prettier", "Figma", "Vercel"],
      color: "from-green-500 to-blue-500",
    },
  ];
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Kana Labs",
      logo: KanaLogo, // put logos in /public/logos folder
      link: "https://kanalabs.io/",
      period: "June 2021 – Present",
      description:
        "Developed and maintained high-performance, responsive user interfaces for flagship trading platforms (Perps, Swap) using React.js, TypeScript, and Redux for a large user base.",
    },
    {
      role: "Frontend Developement Intern",
      company: "Kana Labs",
      logo: KanaLogo,
      link: "https://kanalabs.io/",
      period: "May 2021 – Jun 2021",
      description:
        "Developed responsive and interactive user interfaces for web applications using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <div>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey shaping my expertise in modern frontend
              development
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <Card
                key={i}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                {/* Company info with logo + link */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-8 w-8 object-contain"
                  />
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium  "
                  >
                    {exp.company}
                  </a>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                <div
                  className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full mb-6`}
                />

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
    </div>
  );
};

export default Skills;
