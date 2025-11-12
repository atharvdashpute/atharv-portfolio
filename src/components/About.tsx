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
        <div className="bg-card rounded-lg p-8 shadow-medium border border-border">
          <p className="text-lg text-card-foreground leading-relaxed">
            I'm a passionate Full Stack Developer skilled in designing, developing, and deploying
            scalable web applications using the MERN stack. I enjoy building responsive interfaces,
            optimizing backend APIs, and deploying full-stack projects on modern cloud platforms.
          </p>
          <p className="text-lg text-card-foreground leading-relaxed mt-4">
            I focus on writing clean, maintainable code and creating impactful digital experiences.
            My expertise spans across frontend technologies like React.js, backend development with
            Node.js and Express.js, and database management with MongoDB and MySQL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
