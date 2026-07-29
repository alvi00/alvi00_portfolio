'use client';
import "./styles/TechStack.css";
import {
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs, SiLangchain, SiTailwindcss, SiTypescript, SiMongodb, SiMysql, SiVercel, SiGithub, SiPostgresql, SiExpress, SiRedux, SiDocker, SiFirebase, SiLinux, SiBun, SiFramer,
  SiPytorch, SiTensorflow, SiScikitlearn, SiHuggingface, SiFastapi, SiDjango, SiSelenium, SiPandas, SiNumpy, SiPostman, SiLatex, SiCplusplus, SiOpenjdk
} from "react-icons/si";
import { useState } from "react";

const techIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5", gradient: "from-orange-400 to-red-500" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3", gradient: "from-blue-400 to-blue-600" },
  { icon: <SiLangchain className="text-indigo-500" />, name: "LangChain", gradient: "from-indigo-500 to-purple-600" },
  { icon: <FaJs className="text-yellow-500" />, name: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", gradient: "from-blue-500 to-indigo-600" },
  { icon: <FaReact className="text-cyan-500" />, name: "React", gradient: "from-cyan-400 to-blue-500" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js", gradient: "from-gray-600 to-gray-800" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", gradient: "from-green-400 to-green-600" },
  { icon: <SiTailwindcss className="text-teal-500" />, name: "Tailwind", gradient: "from-teal-400 to-cyan-500" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB", gradient: "from-green-500 to-emerald-600" },
  { icon: <SiMysql className="text-blue-700" />, name: "MySQL", gradient: "from-blue-600 to-blue-800" },
  { icon: <FaPython className="text-blue-400" />, name: "Python", gradient: "from-blue-400 to-yellow-500" },
  { icon: <SiVercel className="text-white" />, name: "Vercel", gradient: "from-gray-700 to-black" },
  { icon: <SiGithub className="text-white" />, name: "GitHub", gradient: "from-gray-600 to-black" },
  { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL", gradient: "from-blue-500 to-indigo-700" },
  { icon: <SiExpress className="text-gray-300" />, name: "Express", gradient: "from-gray-500 to-gray-700" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux", gradient: "from-purple-400 to-indigo-600" },
  { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase", gradient: "from-yellow-300 to-orange-500" },
  { icon: <SiDocker className="text-blue-400" />, name: "Docker", gradient: "from-sky-400 to-blue-600" },
  { icon: <SiLinux className="text-yellow-500" />, name: "Linux", gradient: "from-yellow-400 to-gray-800" },
  { icon: <SiBun className="text-black dark:text-white" />, name: "Bun", gradient: "from-gray-800 to-gray-900" },
  { icon: <SiFramer className="text-pink-500" />, name: "Framer Motion", gradient: "from-pink-400 to-purple-600" },
  { icon: <SiPytorch className="text-orange-600" />, name: "PyTorch", gradient: "from-orange-500 to-red-600" },
  { icon: <SiTensorflow className="text-orange-400" />, name: "TensorFlow", gradient: "from-orange-400 to-amber-600" },
  { icon: <SiScikitlearn className="text-orange-400" />, name: "Scikit-learn", gradient: "from-amber-400 to-blue-500" },
  { icon: <SiHuggingface className="text-yellow-400" />, name: "Transformers", gradient: "from-yellow-300 to-amber-500" },
  { icon: <SiFastapi className="text-teal-500" />, name: "FastAPI", gradient: "from-teal-400 to-emerald-600" },
  { icon: <SiDjango className="text-green-700" />, name: "Django", gradient: "from-green-600 to-emerald-800" },
  { icon: <SiSelenium className="text-green-500" />, name: "Selenium", gradient: "from-green-400 to-lime-600" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman", gradient: "from-orange-400 to-orange-600" },
  { icon: <SiPandas className="text-purple-400" />, name: "Pandas", gradient: "from-purple-400 to-indigo-600" },
  { icon: <SiNumpy className="text-blue-400" />, name: "NumPy", gradient: "from-sky-400 to-blue-600" },
  { icon: <SiCplusplus className="text-blue-500" />, name: "C++", gradient: "from-blue-500 to-indigo-700" },
  { icon: <SiOpenjdk className="text-red-500" />, name: "Java", gradient: "from-red-400 to-orange-600" },
  { icon: <SiLatex className="text-gray-200" />, name: "LaTeX", gradient: "from-gray-400 to-gray-700" },
];

export default function TechStack() {
  const duplicatedIcons = [...techIcons, ...techIcons, ...techIcons];
  const [isPaused, setIsPaused] = useState(false);

  const handleTouchStart = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000); // Resume after 1s
  };

  return (
    <div className="tech-stack-container" id="tech_stack">
      <div className="tech-stack-content">
        <div className="section-header">
          <h2 className="tech-stack-title">
            <span className="title-gradient">Tech Stack</span>
          </h2>
          <p className="tech-stack-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div
          className={`tech-stack-wrapper ${isPaused ? "paused" : ""}`}
          onTouchStart={handleTouchStart}
        >
          <div className="gradient-overlay gradient-left"></div>
          <div className="gradient-overlay gradient-right"></div>

          <div className="marquee-track">
            {duplicatedIcons.map((item, index) => (
              <div
                key={index}
                className="tech-item"
                data-tech={item.name}
              >
                <div className="tech-card">
                  <div className="icon-container">
                    <div className="icon-background"></div>
                    <span className="icon-wrapper">{item.icon}</span>
                  </div>
                  <span className="tech-label">{item.name}</span>
                  <div className="tech-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
      </div>
    </div>
  );
}