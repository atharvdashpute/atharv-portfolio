import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div
        ref={ref}
        className={`container max-w-4xl mx-auto transition-all duration-700 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="bg-card rounded-lg p-8 shadow-medium border border-border hover:shadow-glow transition-all duration-300">
          <p className="text-lg text-card-foreground leading-relaxed">
            I am a Full-Stack developer based in India. I am an Electronics and Telecommunication undergraduate from DBATU. I'm passionate about full-stack development, seamlessly blending front-end and back-end technologies. Beyond the conventional. My problem-solving approach and commitment to continuous learning define my journey. Explore my portfolio for a glimpse into my dynamic projects, and let's connect to explore the exciting intersections of innovation and technology.
          </p>
          <p className="text-lg text-card-foreground leading-relaxed mt-4">
            I focus on writing clean, maintainable code and creating impactful digital experiences. My expertise spans across frontend technologies like React.js, backend development with Node.js and Express.js, and database management with MongoDB and MySQL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
