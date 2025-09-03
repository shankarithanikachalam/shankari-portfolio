import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
// import { Code, Palette, Zap } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  // const highlights = [
  //   {
  //     icon: Code,
  //     title: "Clean Code",
  //     description:
  //       "Writing maintainable, scalable code following best practices and modern standards.",
  //   },
  //   {
  //     icon: Palette,
  //     title: "UI/UX Focus",
  //     description:
  //       "Creating intuitive interfaces that provide exceptional user experiences.",
  //   },
  //   {
  //     icon: Zap,
  //     title: "Performance",
  //     description:
  //       "Optimizing applications for speed, accessibility, and cross-browser compatibility.",
  //   },
  // ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  About Me
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Passionate Frontend Developer
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 4 years of experience in frontend development, I
                specialize in building responsive, high-performance web
                applications that deliver real business value. My work spans
                multiple projects where I’ve combined technical expertise with a
                strong eye for design to create seamless digital experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I value clean code, scalability, and continuous learning. Beyond
                coding, I enjoy exploring new technologies, contributing to open
                source, and sharing insights with the developer community.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="outline">React Enthusiast</Badge>
                <Badge variant="outline">Open Source Contributor</Badge>
                <Badge variant="outline">UI/UX Advocate</Badge>
                <Badge variant="outline">Problem Solver</Badge>
              </div>
            </div>

            {/* <div className="space-y-6">
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
            </div> */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about web development and
                  technology.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                  <a
                    href="mailto:shankari.developer@gmail.com"
                    target="_blank"
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow-accent transition-all duration-300">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        shankari.developer@gmail.com
                      </p>
                    </div>
                  </a>
                </Card>

                <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                  <a
                    href="https://wa.me/918608213838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow-accent transition-all duration-300">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp Contact</p>
                      <p className="text-muted-foreground">Click to connect</p>
                    </div>
                  </a>
                </Card>

                <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow-accent transition-all duration-300">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Chennai, India</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
