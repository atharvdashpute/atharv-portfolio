import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Telecommunication Engineering",
    institution: "Dr. Babasaheb Ambedkar Technological University, Lonere",
    period: "2022 - 2026",
    grade: "CGPA: 6.0 / 10 (till 6th sem)",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Z. B. Patil College",
    period: "2021 - 2022",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Jai Hind High School",
    period: "2019 - 2020",
  },
];

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 px-4 bg-gradient-subtle">
      <div
        ref={ref}
        className={`container max-w-5xl mx-auto transition-all duration-700 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Education
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-medium border border-border hover:shadow-large transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">
                    {edu.degree}
                  </h3>
                  {edu.field && (
                    <p className="text-accent font-medium mb-2">{edu.field}</p>
                  )}
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    {edu.grade && <span className="font-medium">• {edu.grade}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
