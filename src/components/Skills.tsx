import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  Frontend: ["HTML", "CSS", "JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "Flask (basic)"],
  Database: ["MongoDB", "MySQL", "SQLite"],
  Languages: ["Java", "Python", "C"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify", "Render"],
  "Core Concepts": ["REST API Design", "Responsive UI", "Debugging", "Deployment"],
};

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-subtle">
      <div
        ref={ref}
        className={`container max-w-6xl mx-auto transition-all duration-700 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Skills & <span className="text-accent">Technologies</span>
        </h2>
        <div className="space-y-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-medium border border-border">
              <h3 className="text-xl font-semibold text-accent mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-base py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
