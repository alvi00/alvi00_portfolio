import React, { useState, useEffect } from 'react';
import { Trophy, Star, Zap, Code, Rocket } from 'lucide-react';
import "./styles/Achievements.css";

const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      position: "1st Place",
      event: "IBM Granite Hackathon",
      year: "2025",
      icon: <Trophy className="achievement-icon" />,
      description: "AI Innovation Challenge",
      gradient: "gold"
    },
    {
      position: "Top 50",
      event: "NASA Space Apps Challenge",
      year: "2024",
      icon: <Rocket className="achievement-icon" />,
      description: "Global Space Hackathon",
      gradient: "blue"
    },
    {
      position: "Top 15",
      event: "BUET Game Jam",
      year: "2025",
      icon: <Code className="achievement-icon" />,
      description: "72-Hour Game Development",
      gradient: "green"
    },
    {
      position: "Top 50",
      event: "UiU project Showcase",
      year: "2025",
      icon: <Zap className="achievement-icon" />,
      description: "Real-Life Problem Solving",
      gradient: "purple"
    },
  ];

  return (
    <section className="achievements-section" id='Achievements'>
      <div className="achievements-container">
        {/* Header */}
        <div className={`achievements-header ${isVisible ? 'visible' : ''}`}>
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
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`achievement-card ${isVisible ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="card-inner">
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
                    <div className="star-rating">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="star" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`card-glow ${achievement.gradient}`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;