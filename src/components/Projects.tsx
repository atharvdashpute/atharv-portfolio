import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Hospital Management System",
    description:
      "Developed full-stack portal for managing patients, doctors, and appointments. Integrated JWT authentication and RESTful APIs for secure data exchange.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://health-hub-connect.netlify.app/",
  },
  {
    title: "Mini Blogging Platform",
    description:
      "Built blogging platform with authentication, CRUD operations, and background jobs. Implemented admin dashboard and comment system.",
    tech: ["Ruby on Rails", "PostgreSQL", "Devise"],
    link: "https://health-hub-connect.netlify.app/",
  },
  {
    title: "Weather Forecast App",
    description:
      "Built responsive app fetching real-time data using REST API and dynamic React UI with beautiful visualizations.",
    tech: ["React.js", "OpenWeather API", "CSS"],
    link: "#",
  },
  {
    title: "AI-Enhanced Career Guidance System",
    description:
      "A web-based AI career guidance system integrating machine learning and chatbot interaction to deliver tailored career suggestions based on user input.",
    tech: ["Python", "Machine Learning", "Chatbot", "AI"],
    link: "https://atharvdashpute.github.io/Ai-Enhanced-Carrier-Guidelnce-System/",
  },
  {
    title: "Car Racing Game",
    description:
      "A high-speed racing experience with thrilling tracks, responsive controls, and a sleek arcade-style design.",
    tech: ["JavaScript", "HTML5", "Canvas", "Game Dev"],
    link: "https://atharvdashpute.github.io/Car-racing-game/",
  },
  {
    title: "Coming Soon",
    description:
      "New exciting project in development. Stay tuned for updates!",
    tech: ["TBA"],
    link: "#",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div
        ref={ref}
        className={`container max-w-6xl mx-auto transition-all duration-700 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-accent bg-card"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-card-foreground">
                  <span>{project.title}</span>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 text-accent-foreground hover:text-accent transition-colors" />
                    </a>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground border border-accent/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
