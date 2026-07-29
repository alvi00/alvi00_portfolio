import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { SiGooglescholar, SiLeetcode } from "react-icons/si";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/alvi00" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://scholar.google.com/citations?user=BSOq8zAAAAAJ&hl=en"
            target="_blank"
          >
            <SiGooglescholar />
          </a>
        </span>
        <span>
          <a href="https://leetcode.com/u/ahmadfahmid59/" target="_blank">
            <SiLeetcode />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/ahmad-fahmid/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://web.facebook.com/alvi00o/" target="_blank">
            <FaFacebook />
          </a>
        </span>
      </div>
      <a className="resume-button" href="https://drive.google.com/drive/folders/1Pu51hVbLnpQHHErOSfg7GcrV9oKPmLI0?usp=sharing" target="_blank">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
