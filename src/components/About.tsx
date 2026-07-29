import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        {/* .para is SplitText-animated and its ScrollTrigger resolves off
            parentElement.parentElement — keep it a direct child of .about-me */}
        <p className="para">
          Final-year Computer Science and Engineering student (AI/ML major) and
          research assistant working across testing, evaluation, and technical
          writing. Built the automated edge-case generation and debugging loop
          behind a published code-generation system that ranked 10th worldwide,
          defined the evaluation protocol for clinical deep learning models at
          Duke University, and authored the benchmarks, evaluation, frameworks,
          and datasets sections of a review paper. Author of three published
          papers and a consistent hackathon finalist. My strengths lie in
          persistence, adaptability, and the courage to take on challenges, even
          when the path isn’t clear.
          <br />
          <br />
          Simply saying — I build behind pixels.
        </p>
      </div>
    </div>
  );
};

export default About;
