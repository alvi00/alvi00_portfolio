import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding =
        parseInt(window.getComputedStyle(box[0]).padding || "0") / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        
        <div className="work-flex">
            <div className="work-box">
                <div className="work-info">
                  <div className="work-title">
                    <h3>1</h3>
                    <div>
                      <h4>Bangladesh Liberation War Research Center</h4>
                      <p>  A platform for exploring verified documents, images, and stories from the Bangladesh Liberation War.</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>Gsap, TypeScript, React</p>

                  <a href="https://bangladesh-muktijuddho-gobeshona-ke.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-btn">Visit Project</button>
                  </a>
                </div>
                <WorkImage image="/images/mjgk.png" alt="" />
              </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>2</h3>

                  <div>
                    <h4>Ask Alvi</h4>
                    <p>AI-powered search assistant.</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Next.js,Langchain.js,groq,cheerio ,serper</p>
                <a href="https://ask-alvi-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-btn">Visit Project</button>
                  </a>
              </div>
              <WorkImage image="/images/ask-alvi.png" alt="" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>3</h3>

                  <div>
                    <h4>Careplus</h4>
                    <p>A telemedicine Website</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React, Twilio</p>
                 <a href="https://careplus-ebon-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-btn">Visit Project</button>
                  </a>
              </div>
              <WorkImage image="/images/careplus.png" alt="" />
            </div>
                        <div className="work-box">
                <div className="work-info">
                  <div className="work-title">
                    <h3>4</h3>
                    <div>
                      <h4>Bangladesh Liberation War Research Center</h4>
                      <p>  A platform for exploring verified documents, images, and stories from the Bangladesh Liberation War.</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>Gsap, TypeScript, React</p>

                  <a href="https://bangladesh-muktijuddho-gobeshona-ke.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-btn">Visit Project</button>
                  </a>
                </div>
                <WorkImage image="/images/mjgk.png" alt="" />
              </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>5</h3>

                  <div>
                    <h4>Ask Alvi</h4>
                    <p>AI-powered search assistant.</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Next.js,Langchain.js,groq,cheerio ,serper</p>
                <a href="https://ask-alvi-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-btn">Visit Project</button>
                  </a>
              </div>
              <WorkImage image="/images/ask-alvi.png" alt="" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>6</h3>

                  <div>
                    <h4>Careplus</h4>
                    <p>A telemedicine Website</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React, Twilio</p>
                 <a href="https://careplus-ebon-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="visit-btn">Visit Project</button>
                  </a>
              </div>
              <WorkImage image="/images/careplus.png" alt="" />
            </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
