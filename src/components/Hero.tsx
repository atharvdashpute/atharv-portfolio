import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer | Software Developer | MERN | Java | Cloud";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % 1;
      const currentText = fullText;

      setTypedText(
        isDeleting
          ? currentText.substring(0, typedText.length - 1)
          : currentText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && typedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-accent">Atharv Dashpute</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground mb-6 h-12 flex items-center justify-center md:justify-start">
              <span className="border-r-2 border-accent pr-1 animate-pulse">
                {typedText}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 hover:bg-accent hover:text-accent-foreground transition-all shadow-soft"
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/atharvdashpute"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/atharv-dashpute-94bba8257"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/atharv_.4496/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300"
              >
                <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://www.threads.com/@atharv_.4496?xmt=AQF0ObfqahFGNxDULNlkE-Ym03u5l72pQZcs4VcFkSOfLBo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300"
              >
                <FaXTwitter className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="mailto:dashputeatharv@gmail.com"
                className="group relative p-3 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Atharv Dashpute"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
