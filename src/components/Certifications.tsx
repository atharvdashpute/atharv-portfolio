import { useInView } from "react-intersection-observer";
import { Award } from "lucide-react";

const certificationsData = [
  {
    title: "React & Node.js Developer Bootcamp",
    issuer: "Udemy",
    year: "2025",
  },
  {
    title: "Java Programming Masterclass",
    issuer: "Udemy (by Abdul Bari)",
    year: "2024",
  },
  {
    title: "Google Cloud Fundamentals",
    issuer: "Coursera",
    year: "2024",
  },
];

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div
        ref={ref}
        className={`container max-w-5xl mx-auto transition-all duration-700 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-medium border border-border hover:shadow-large transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                <span className="text-sm text-accent font-medium">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
