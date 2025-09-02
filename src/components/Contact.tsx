import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" className="bg-background/50" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" className="bg-background/50" />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" className="bg-background/50" />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={6} 
                  className="bg-background/50 resize-none"
                />
              </div>
              <Button className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about web development and technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow-accent transition-all duration-300">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow-accent transition-all duration-300">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow-accent transition-all duration-300">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Your City, Country</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;