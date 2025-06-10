import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Bangladesh Liberation War Research Center",
      description: "A platform for exploring verified documents, images, and stories from the Bangladesh Liberation War.",
      tools: ["Gsap", "TypeScript", "React"],
      category: "Research Platform",
      image: "/images/mjgk.png",
      link: "https://bangladesh-muktijuddho-gobeshona-ke.vercel.app/",
      video: "mjgk-demo.mp4",
      color: "#ff6b6b"
    },
    {
      id: 2,
      title: "Ask Alvi",
      description: "AI-powered search assistant with advanced natural language processing capabilities.",
      tools: ["Next.js", "Langchain.js", "Groq", "Cheerio"],
      category: "AI Assistant",
      image: "/images/ask-alvi.png",
      link: "https://ask-alvi-ai.vercel.app/",
      video: "ask-alvi-demo.mp4",
      color: "#4ecdc4"
    },
    {
      id: 3,
      title: "Careplus",
      description: "Revolutionary telemedicine platform connecting patients with healthcare professionals seamlessly.",
      tools: ["JavaScript", "TypeScript", "React", "Twilio"],
      category: "Healthcare",
      image: "/images/careplus.png",
      link: "https://careplus-ebon-three.vercel.app/",
      video: "careplus-demo.mp4",
      color: "#a8e6cf"
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <div className="work-header">
          <div className="header-decoration">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
          </div>
          <h2 className="work-title">
            <span className="title-line highlighted">Work</span>
            <span className="title-line">Portfolio</span>
          </h2>
        </div>
        
        <div className="work-showcase">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`work-masterpiece ${index % 2 === 1 ? 'reverse' : ''}`}
              style={{'--accent-color': project.color} as React.CSSProperties}
            >
              <div className="masterpiece-visual">
                <div className="visual-frame">
                  <div className="frame-glow"></div>
                  <div className="visual-content">
                    <WorkImage 
                      image={project.image} 
                      alt={project.title}
                      video={project.video}
                      link={project.link}
                    />
                  </div>
                  <div className="floating-elements">
                    <div className="float-element element-1"></div>
                    <div className="float-element element-2"></div>
                    <div className="float-element element-3"></div>
                  </div>
                </div>
              </div>
              
              <div className="masterpiece-content">
                <div className="content-inner">
                  <div className="project-meta">
                    <span className="project-number">0{project.id}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="tech-stack">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="tech-badge">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-actions">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-primary"
                    >
                      <span className="action-text action-secondary">Explore Project</span>
                      <div className="action-icon action-secondary">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="action-ripple"></div>
                    </a>
                  </div>
                </div>
                
                <div className="content-decoration">
                  <div className="decoration-line"></div>
                  <div className="decoration-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="showcase-footer">
          <div className="footer-glow"></div>
          <p>More amazing projects coming soon...</p>
        </div>
      </div>
      
     
    </div>
  );
};

export default Work;