import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

/**
 * Professional Portfolio - Dark Mode with Neon Green Accents
 * Design Philosophy: Tech-forward aesthetic with masonry grid layout
 * - Dark background (#0a0a0a) with neon green (#00ff00) accents
 * - Dashed green borders on project cards
 * - Masonry/irregular grid layout for visual interest
 * - High contrast for readability and impact
 */

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  //views: string;
  tags?: string[];
  link?: string;
  github?: string;
  size?: "small" | "medium" | "large"; // For masonry layout
}

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
}

interface Education {
  id: number;
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
  details?: string;
}

// Added tags to each project to highlight skills gained
const projects: Project[] = [
  {
    id: 1,
    title: "Master Thesis: The Role of Trajectory Prediction in the Perception of Approaching Agents",
    description: "This study compares simple and complex trajectory prediction models for human-robot interaction, focusing on user perception and computational efficiency in real-time scenarios.",
    date: "Dec, 2025",
    link: "https://fenix.tecnico.ulisboa.pt/cursos/meec21/dissertacao/1691203502345268",
    github: "#",
    size: "medium",
    tags: ["Trajectory Prediction", "Human-Robot Interaction", "Transformers", "Linear Regression"]
  },
  {
    id: 2,
    title: "Mask Detection Machine Learning Model",
    description: "As an Image-and-Speech-Recognition-Project, a multimodal AI application that integrates computer vision to detect face mask usage in real time. Implemented a face-mask classifier capable of distinguishing between “with mask”, “without mask”, and “incorrect mask” directly from camera input. The project demonstrates practical experience with deep learning models and real-time image processing, as well as structuring a production-like Python project with clear modules for data, models, and application logic.",
    date: "Nov, 2024",
    link: "https://github.com/TioDosio/Image-and-Speech-Recognition-Project",
    github: "https://github.com/TioDosio/Image-and-Speech-Recognition-Project",
    size: "medium",
    tags: ["Computer Vision", "Deep Learning", "Python", "Real-Time Processing"]
  },
  {
    id: 3,
    title: "Voice and Word Recogniser Security System",
    description: "This project is a voice and word recognizer developed for the “Audio Signal Analysis and Speech Recognition” course. It analyzes audio signals, extracts speech features, and recognizes specific words or speakers to act as a security mechanism for accessing a protected platform.",
    date: "Nov, 2024",
    link: "#",
    github: "#",
    size: "medium",
    tags: ["Speech Recognition", "Audio Signal Analysis", "Security Systems", "Python"]
  },
  {
    id: 4,
    title: "LizardsNroaches - local multi-player game",
    description: "This project is a systems programming assignment implementing a distributed, multi‑process variation of the classic snake game, where lizards roam a field, eat cockroaches, and are attacked by wasps. The game is composed of several independent clients and a central server that coordinate over TCP using ZeroMQ.",
    date: "Jan, 2024",
    link: "https://github.com/TioDosio/PSis",
    github: "#",
    size: "medium",
    tags: ["Systems Programming", "Distributed Systems", "ZeroMQ", "TCP"]
  },
  {
    id: 5,
    title: "Travelling Salesman via Ant Colony Optimization",
    description: "Travelling Salesman Problem (TSP) simulator based on Ant Colony Optimization (ACO), designed as a course project for Object Oriented Programming at IST. The system is implemented in Java with an emphasis on clean object-oriented design, UML-driven architecture, and discrete stochastic simulation of ant behavior on weighted graphs.",
    date: "May 21, 2023",
    link: "https://github.com/ErreEne/POO-project",
    github: "#",
    size: "medium",
    tags: ["Ant Colony Optimization", "TSP", "Java", "Object-Oriented Design"]
  },
];

const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "Maven Pet",
    position: "Machine Learning Engineer Intern",
    startDate: "2024",
    endDate: "2025",
    description: `Spearheaded the development and optimization of extensible time series feature extraction and selection modules, reducing training pipeline maintenance effort by approximately 30%. Devised and implemented feature engineering strategies that boosted model accuracy by around 5% and improved scalability for future model iterations. Collaborated with distributed, cross-functional teams to enable rapid prototyping and deployment, demonstrating strong remote communication and project management skills.`,
    skills: ["Time Series Analysis", "Feature Engineering", "Python", "Remote Collaboration"]
  },
  {
    id: 2,
    company: "Sharkcoders",
    position: "Programming and Robotics Teacher",
    startDate: "09/2021",
    endDate: "06/2024",
    description: `Designed and delivered curricula for five concurrent classes (6–10 students each), from entry-level programming to advanced Python and robotics. Mentored students through full project lifecycles, achieving a 100% project completion rate and building solid problem-solving skills. Created hands-on, creative modules to increase engagement and foster innovation while balancing teaching duties with demanding academic work.`,
    skills: ["Python", "Robotics", "Teaching", "Mentoring"]
  }
];

const education: Education[] = [
  {
    id: 1,
    school: "Instituto Superior Técnico",
    degree: "Master’s in Electrical and Computer Engineering",
    field: "Major in Control, Robotics, and AI",
    graduationDate: "11/2025",
    details: `GPA: 16/20 | Advanced coursework in Machine Learning, Deep Learning, Robotics, and Computer Vision. Master’s Thesis: “The Role of Trajectory Prediction in the Perception of Approaching Agents”, focused on trajectory optimization in social robotics with advanced vision algorithms.`
  },
  {
    id: 2,
    school: "Warsaw University of Technology",
    degree: "Erasmus Program in Computer Science",
    field: "Computer Vision and Machine Learning",
    graduationDate: "02/2025",
    details: `GPA: 4.5/5 | Worked in international, cross-disciplinary teams on impactful projects, strengthening adaptability and global perspective.`
  },
  {
    id: 3,
    school: "Instituto Superior Técnico",
    degree: "Bachelor in Electrical and Computer Engineering",
    field: "Electrical and Computer Engineering",
    graduationDate: "07/2023",
    details: `GPA: 14/20 | Frequently ranked in the top 10% in C programming, algorithms, data structures, and network architecture. Earned the top grade for a Java capstone project, demonstrating end-to-end software development skills.`
  }
];

// Add a new Skills section
const skills = {
  programmingLanguages: ["Python", "C/C++", "MATLAB", "Java", "JavaScript"],
  tools: ["Git", "ROS", "Linux", "Docker", "SQL"],
  dataAndMachineLearning: ["Keras", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "End-to-end ML pipeline development"],
  webTechnologies: ["HTML", "CSS", "JavaScript"],
  softSkills: ["Communication", "Stakeholder Engagement", "Analytical Leadership", "Creative Problem-Solving", "Reliability", "Cross-Cultural Collaboration"]
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getMasonryColSpan = (size?: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2";
      case "medium":
        return "md:col-span-1";
      default:
        return "md:col-span-1";
    }
  };

  const getMasonryRowSpan = (size?: string) => {
    switch (size) {
      case "large":
        return "md:row-span-2";
      case "medium":
        return "md:row-span-1";
      default:
        return "md:row-span-1";
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/30">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">{">"}</div>
          <div className="flex gap-8">
            {["Projects", "Experience", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover-underline text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 md:py-32 border-b border-primary/20">
        <div className="container">
          <div className="max-w-2xl fade-in-up fade-in-up-1">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-primary">André Teodósio</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Junior AI Engineer and Software Developer based in Nijmegen, Netherlands. I specialize in scalable machine learning, software, robotics and computer vision.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28">
        <div className="container">
          <div className="mb-16 fade-in-up fade-in-up-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">
              Some of the projects are from work and some are on my own time.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${getMasonryColSpan(project.size)} ${getMasonryRowSpan(project.size)} fade-in-up fade-in-up-${(index % 5) + 1}`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card card-hover group h-full p-6 rounded-sm flex flex-col justify-between overflow-hidden block"
                >
                  {/* Header with date and views */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs text-muted-foreground font-mono">
                      {project.date}
                    </span>
                    {/* <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Eye className="w-3 h-3" />
                      <span>{project.views}</span>
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-primary/20">
                    <span className="text-xs text-primary font-bold">
                      Read more →
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-28">
        <div className="container">
          <div className="mb-16 fade-in-up fade-in-up-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
            <p className="text-muted-foreground text-lg">
              My professional journey and educational background.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div className="fade-in-up fade-in-up-2">
              <h3 className="text-2xl font-bold mb-8 text-primary">Work Experience</h3>
              <div className="space-y-6">
                {workExperience.map((job) => (
                  <div
                    key={job.id}
                    className="border-l-2 border-primary pl-6 py-2 hover:border-primary/80 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{job.position}</h4>
                        <p className="text-primary font-semibold text-sm">{job.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {job.startDate} - {job.endDate}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {job.description}
                    </p>
                    {job.skills && (
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="fade-in-up fade-in-up-3">
              <h3 className="text-2xl font-bold mb-8 text-primary">Education</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="border-l-2 border-primary pl-6 py-2 hover:border-primary/80 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-semibold text-sm">{edu.school}</p>
                        <p className="text-muted-foreground text-sm">{edu.field}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {edu.graduationDate}
                      </span>
                    </div>
                    {edu.details && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28">
        <div className="container">
          <div className="mb-16 fade-in-up fade-in-up-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive list of my technical and soft skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <div className="fade-in-up fade-in-up-2">
              <h3 className="text-2xl font-bold mb-4 text-primary">Programming Languages</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {skills.programmingLanguages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="fade-in-up fade-in-up-3">
              <h3 className="text-2xl font-bold mb-4 text-primary">Tools</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {skills.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>

            {/* Data and Machine Learning */}
            <div className="fade-in-up fade-in-up-4">
              <h3 className="text-2xl font-bold mb-4 text-primary">Data and Machine Learning</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {skills.dataAndMachineLearning.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="fade-in-up fade-in-up-5">
              <h3 className="text-2xl font-bold mb-4 text-primary">Soft Skills</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {skills.softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto fade-in-up fade-in-up-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up fade-in-up-2">
              <a
                href="mailto:andrefteo@gmail.com"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/80 transition-colors font-bold text-sm"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://github.com/TioDosio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-sm hover:bg-primary/10 transition-colors font-bold text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/andre-teodosio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-sm hover:bg-primary/10 transition-colors font-bold text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 bg-background/50">
        <div className="container text-center text-muted-foreground text-sm">
          <p>© 2026 André Teodósio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
