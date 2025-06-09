import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Incharge</h4>
                <h5>IEEE NSU Student Branch</h5>
              </div>
              <h3>2023-2025</h3>
            </div>
            <p>
                As the Incharge of the IEEE NSU Student Branch, I helped lead the team by organizing events, supporting members, and making sure everything ran smoothly. I also worked on the visual side — creating posters, banners, and graphics to make our branch look professional and stand out at events and online.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sub Executive</h4>
                <h5>IEEE NSU PES Student Branch</h5>
              </div>
              <h3>2023-2025</h3>
            </div>
            <p> 
              As a Sub Executive at IEEE NSU PES, I supported the team in planning and managing events, handled tasks on time, and made sure everything ran smoothly. I also helped with graphic design work to make our events and promotions look more creative and professional.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Game Developer</h4>
                <h5>Mini Game Lab Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
                  As a Junior Game Developer at Mini Game Lab Ltd., I worked on building and testing games using Unity. I helped design game mechanics, fix bugs, and improve player experience. I also collaborated with artists and designers to bring fun ideas to life.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
                As a freelancer, I take on a wide range of projects — from building interactive games with p5.js to creating websites, Java apps, and machine learning models. I enjoy solving real problems and working with whatever tools the project needs. Every gig is a chance to learn and level up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
