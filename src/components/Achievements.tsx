import { useInView } from "react-intersection-observer";
import { Trophy } from "lucide-react";

const achievementsData = [
  "Built multiple full-stack projects independently during internship",
  "Successfully deployed MERN applications on Netlify",
];

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-subtle">
      <div
        ref={ref}
        className={`container max-w-5xl mx-auto transition-all duration-700 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-medium border border-border hover:shadow-large transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <p className="text-lg text-card-foreground">{achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
