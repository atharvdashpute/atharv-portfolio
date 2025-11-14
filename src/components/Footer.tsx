import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

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
              className="group p-2 rounded-full hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/atharv-dashpute-94bba8257"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://www.instagram.com/atharv_.4496/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://www.threads.com/@atharv_.4496?xmt=AQF0ObfqahFGNxDULNlkE-Ym03u5l72pQZcs4VcFkSOfLBo"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-full hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300"
            >
              <FaXTwitter className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="mailto:dashputeatharv@gmail.com"
              className="group p-2 rounded-full hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
