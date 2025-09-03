import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Find current active section
      let current = "home";
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = item.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const smoothScrollTo = (targetId: string) => {
    setActiveSection(targetId);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between  ">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8  ">
            {navItems.map((item, index) => (
              <div key={item.id} className="flex items-center">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(item.id); // adjust speed (ms)
                  }}
                  href={item.href}
                  className={` ${
                    activeSection === item.id
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  } transition-colors duration-300 relative group `}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0  h-0.5 bg-gradient-primary  transition-all duration-300 ${
                      activeSection === item.id
                        ? " w-full"
                        : "group-hover:w-full w-0"
                    } `}
                  />
                </a>
                {index !== navItems.length - 1 && (
                  <span className="ml-4 text-gray-400 mr-[-1rem] w-[1px] h-[1.5rem] bg-gray-400"></span>
                )}
              </div>
            ))}
          </div>
          {/* Logo */}
          <div className="flex md:hidden text-2xl font-bold bg-gradient-primary  bg-clip-text text-transparent">
            Shankari
          </div>
          {/* Mobile Menu Button */}
          <div
            className="flex gap-4   animate-fade-in opacity-0   justify-end items-center"
            style={{ animationDelay: "1.4s" }}
          >
            <Button
              href="https://github.com/shankarithanikachalam"
              target="_blank"
              variant="ghost"
              size="icon"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              href="https://www.linkedin.com/in/shankarithanikachalam/"
              target="_blank"
              variant="ghost"
              size="icon"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              href="mailto:shankari.developer@gmail.com"
              target="_blank"
              variant="ghost"
              size="icon"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
