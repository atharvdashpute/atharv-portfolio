import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {currentYear} Atharv Dashpute. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/atharvdashpute"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/atharv-dashpute-94bba8257"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:dashputeatharv@gmail.com"
              className="p-2 rounded-full hover:bg-primary-foreground/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
