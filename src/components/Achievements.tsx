import React from 'react';
import { Trophy, Star, Award, Code, Rocket, ExternalLink } from 'lucide-react';
import useInView from './utils/useInView';
import "./styles/Achievements.css";

type Achievement = {
  position: string;
  event: string;
  year: string;
  icon: React.ReactNode;
  description: string;
  gradient: string;
  link?: string;
};

const Achievements: React.FC = () => {
  const header = useInView<HTMLDivElement>();
  const grid = useInView<HTMLDivElement>();

  const achievements: Achievement[] = [
    {
      position: "1st Place",
      event: "IBM Granite Hackathon",
      year: "2025",
      icon: <Trophy className="achievement-icon" />,
      description: "AI Innovation Challenge",
      gradient: "gold",
      link: "https://drive.google.com/file/d/1glBGDc5J1zNPBVOyE8T70JsV58519dK-/view?usp=sharing"
    },
    {
      position: "1st Runner-Up",
      event: "NASA Space Apps Challenge",
      year: "2025",
      icon: <Rocket className="achievement-icon" />,
      description: "Global space hackathon — Team Sirius",
      gradient: "blue",
      link: "https://drive.google.com/file/d/1Pl6eCG-xGriEIeSzLtnpBUu2yWh9kVcl/view?usp=sharing"
    },
    {
      position: "10th Worldwide",
      event: "BLP-2025 Workshop, Task 2",
      year: "2025",
      icon: <Award className="achievement-icon" />,
      description: "Code generation from Bangla instructions — published in the ACL Anthology",
      gradient: "purple",
      link: "https://aclanthology.org/2025.banglalp-1.60.pdf"
    },
    {
      position: "Top 30 ×7",
      event: "Hackathons & Game Jams",
      year: "2024 – 2025",
      icon: <Code className="achievement-icon" />,
      description: "BUET Game Jam, IUT Game Jam, UIU Project Showcase, BUBT, Solvio, Lovable AI, Co-Creating with GPT-5",
      gradient: "green"
    },
  ];

  return (
    <section className="achievements-section" id='Achievements'>
      <div className="achievements-container">
        {/* Header */}
        <div
          className={`achievements-header ${header.inView ? 'visible' : ''}`}
          ref={header.ref}
        >
          <div className="header-icon-wrapper">
            <div className="header-icon-bg">
              <Star className="header-icon" />
            </div>
            <h2 className="achievements-title">Achievements</h2>
          </div>
          <p className="achievements-subtitle">
            Recognized excellence in hackathons, competitions, and innovation challenges across the globe
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid" ref={grid.ref}>
          {achievements.map((achievement, index) => {
            const cardBody = (
              <>
                {/* Floating Icon */}
                <div className={`floating-icon ${achievement.gradient}`}>
                  {achievement.icon}
                </div>

                {/* Position Badge */}
                <div className="position-badge-wrapper">
                  <span className={`position-badge ${achievement.gradient}`}>
                    {achievement.position}
                  </span>
                </div>

                {/* Content */}
                <div className="card-content">
                  <h3 className="achievement-event">{achievement.event}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  <div className="achievement-footer">
                    <span className="achievement-year">{achievement.year}</span>
                    {achievement.link ? (
                      <span className="achievement-proof">
                        View proof <ExternalLink />
                      </span>
                    ) : (
                      <div className="star-rating">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="star" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`card-glow ${achievement.gradient}`}></div>
              </>
            );

            return (
              <div
                key={index}
                className={`achievement-card ${grid.inView ? 'visible' : ''}`}
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                {achievement.link ? (
                  <a
                    className="card-inner"
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                  >
                    {cardBody}
                  </a>
                ) : (
                  <div className="card-inner">{cardBody}</div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
