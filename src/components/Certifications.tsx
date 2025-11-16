import { useInView } from "react-intersection-observer";
import { Award } from "lucide-react";
import { ExternalLink } from "lucide-react";

const certificationsData = [
  {
    title: "Fullstack-Web Development MERN",
    issuer: "Udemy (By Hitesh sir)",
    year: "2025",
     link: "#",
  },
  {
    title: "J.P. Morgan - Software Engineering Job Simulation ",
    issuer: "Forage",
    year: "October 2025",
    link:"https://drive.google.com/file/d/1V2se23Yy8c7aEAkwjsLlE5Oj0O4EnxGB/view?usp=drive_link",
  },
  {
    title: "Java Development Internship",
    issuer: "OCTANET",
    year: "September 2024 ",
    link:"https://drive.google.com/file/d/1Tiye0aC0Nm7UvzuUBWgjA2SeGP-oibAy/view?usp=drive_link",
  },
  {
    title: "Artificial Intelligence Machine Learning",
    issuer: "YBI FOUNDATION",
    year: "October 2024 ",
    link: "https://drive.google.com/file/d/1vLLhGj09Th6pPbIv_X_E4CvdmhVzYxEQ/view?usp=drive_link",
  },
  {
    title: "Web Development",
    issuer: "Prodigy Infotech",
    year: " Jully2024",
    link : "https://drive.google.com/file/d/1-ZCs2TZ_n0QFeuOv0AgHZ0UB7no4nZ31/view?usp=drive_link",
  },
  {
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Forage",
    year: " May 2024",
    link:"https://drive.google.com/file/d/1meX-7tpMpi0deBDu3a9FTqQy6-U7RMR-/view?usp=drive_link",
    
  },
  
  {
    title: "Basic Python Course",
    issuer: "Udemy",
    year: "2023",
    link:"https://drive.google.com/file/d/1ZOK_ZUuLNXt9iayXEnKZZb9CELZPoPXj/view?usp=drive_link",
  },
  {
    title: "Carreer Edge - Young Professional",
    issuer: "TCS ION",
    year: "September 2023",
    link:"https://drive.google.com/file/d/1dvPiqxx9emC2-q16oty6f_CVYc6-WDD_/view?usp=drive_link",
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
  <a 
    key={index}
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-card rounded-lg p-6 shadow-medium border border-border 
               hover:shadow-glow transition-all duration-300 transform 
               hover:-translate-y-1"
  >
    <div className="flex flex-col items-center text-center">
      <div className="p-4 bg-accent/20 rounded-full mb-4 border border-accent/30">
        <Award className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-card-foreground mb-2">
        {cert.title}
      </h3>
      <p className="text-muted-foreground mb-1">{cert.issuer}</p>
      <span className="text-sm text-accent font-medium">{cert.year}</span>
    </div>
  </a>
))}

             
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-accent/20 rounded-full mb-4 border border-accent/30">
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
