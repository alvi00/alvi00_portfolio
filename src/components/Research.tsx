import React from "react";
import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  ExternalLink,
  Github,
  Quote,
} from "lucide-react";
import useInView from "./utils/useInView";
import "./styles/Research.css";

type Publication = {
  title: string;
  venue: string;
  year: string;
  role: string;
  tags: string[];
  link: string;
};

type ResearchProject = {
  title: string;
  blurb: string;
  stack: string[];
  link: string;
  status?: string;
};

const publications: Publication[] = [
  {
    title:
      "Multi-Label Thoracic Disease Detection and Weakly Supervised Localization in Chest X-Rays Using DenseNet121 and Probabilistic CAM Pooling",
    venue:
      "IEEE 4th International Conference on Robotics, Automation, Artificial-Intelligence and Internet-of-Things (RAAICON)",
    year: "2025",
    role: "First author",
    tags: ["Medical Imaging", "DenseNet121", "Weak Supervision"],
    link: "https://ieeexplore.ieee.org/abstract/document/11502273/",
  },
  {
    title:
      "BLP-2025 Task 2: A Chain-of-Thought with Iterative Debugging Approach for Code Generation with Bangla Instruction",
    venue: "BLP Workshop @ IJCNLP-AACL 2025 · ACL Anthology",
    year: "2025",
    role: "First author",
    tags: ["LLMs", "Code Generation", "10th Worldwide"],
    link: "https://aclanthology.org/2025.banglalp-1.60.pdf",
  },
  {
    title:
      "Anomaly Detection for Sunburst Attack Identification Using Hybrid AI: A Stacking Ensemble and Attention-Based LSTM Approach",
    venue: "CompSysTech 2025",
    year: "2025",
    role: "Co-author",
    tags: ["Cybersecurity", "Attention LSTM", "Ensembles"],
    link: "https://ieeexplore.ieee.org/abstract/document/11136883",
  },
];

const researchProjects: ResearchProject[] = [
  {
    title: "Bangla-to-Python Code Generator",
    blurb:
      "Generate-test-repair pipeline that synthesizes edge cases for each Bangla instruction, runs the generated program against them, and feeds failures back into the model until it passes.",
    stack: ["Qwen2.5", "Chain-of-Thought", "RAG", "Auto Test Gen"],
    link: "https://github.com/alvi00/A-Chain-of-Thought-with-Iterative-Debugging-Approach-for-Code-Generation-with-Bangla-Instruction",
    status: "Published",
  },
  {
    title: "MediTalk AI",
    blurb:
      "Multimodal medical pre-diagnosis assistant producing structured patient summaries, symptom extraction, and suggested tests from text, voice, and image inputs using six fine-tuned models.",
    stack: ["FastAPI", "React", "MongoDB", "OCR", "ASR"],
    link: "https://github.com/alvi00/MediTalk_AI",
  },
  {
    title: "Meeting Automation Agent",
    blurb:
      "Automates meeting attendance with Selenium, then chains transcription, abstractive summarization, toxicity filtering, and PDF reports with multilingual TTS.",
    stack: ["Django", "Selenium", "Transformers", "TTS"],
    link: "https://github.com/alvi00/meeting_agent",
  },
  {
    title: "Bangla–English Speech-to-Text API",
    blurb:
      "Bilingual transcription service exposed as a documented REST API, with setup instructions and endpoint docs for other developers to integrate.",
    stack: ["Whisper", "Python", "REST API"],
    link: "https://github.com/alvi00/bangla_english_speech_to_text_api",
  },
  {
    title: "CultAct-ML",
    blurb:
      "Measuring how LLM agent defaults shift across languages and cultural contexts, including low-resource settings.",
    stack: ["LLMs", "Multilingual Eval", "Python"],
    link: "https://github.com/alvi00/CultAct-ML",
    status: "Ongoing",
  },
];

const Research: React.FC = () => {
  const header = useInView<HTMLDivElement>();
  const labs = useInView<HTMLDivElement>();
  const pubs = useInView<HTMLDivElement>();
  const projects = useInView<HTMLDivElement>();

  return (
    <section className="research-section" id="research">
      <div className="research-container">
        {/* Header */}
        <div
          className={`research-header ${header.inView ? "visible" : ""}`}
          ref={header.ref}
        >
          <div className="research-header-icon">
            <FlaskConical />
          </div>
          <h2 className="research-title">Research &amp; Publications</h2>
          <p className="research-subtitle">
            Three published papers across medical imaging, low-resource code
            generation, and cybersecurity — plus the labs where the work happens.
          </p>
          <a
            className="scholar-link"
            href="https://scholar.google.com/citations?user=BSOq8zAAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            <GraduationCap />
            <span>Google Scholar</span>
            <ExternalLink className="scholar-arrow" />
          </a>
        </div>

        {/* Lab affiliations */}
        <div className="research-labs" ref={labs.ref}>
          <div className={`lab-card ${labs.inView ? "visible" : ""}`}>
            <span className="lab-tag">Aug 2025 – Present</span>
            <h3>Duke University</h3>
            <h4>Research Assistant · Kamaleswaran Lab</h4>
            <p>
              Authored the benchmarks, evaluation, frameworks, and datasets
              sections of a review paper. Defined the evaluation protocol and
              metrics benchmarking three deep learning architectures on the MIMIC
              clinical dataset, and built an encoder integrated with Qwen3 for a
              RAG-based clinical retrieval system.
            </p>
          </div>
          <div
            className={`lab-card ${labs.inView ? "visible" : ""}`}
            style={{ "--delay": "0.15s" } as React.CSSProperties}
          >
            <span className="lab-tag">Nov 2025 – Present</span>
            <h3>North South University</h3>
            <h4>Student Research Assistant · TriModal AI Lab</h4>
            <p>
              Designed the automated edge-case generation and iterative debugging
              loop behind a Bangla-to-Python code generation system that ranked
              10th worldwide at BLP-2025. Specified and built MediTalk AI and the
              Meeting Agent pipeline.
            </p>
          </div>
        </div>

        {/* Publications */}
        <div className="research-block">
          <div className="block-heading">
            <BookOpen />
            <h3>Publications</h3>
          </div>
          <div className="publication-list" ref={pubs.ref}>
            {publications.map((pub, index) => (
              <a
                key={pub.title}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className={`publication-card ${pubs.inView ? "visible" : ""}`}
                style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="publication-index">
                  <Quote />
                  <span>0{index + 1}</span>
                </div>
                <div className="publication-body">
                  <h4 className="publication-title">{pub.title}</h4>
                  <p className="publication-venue">{pub.venue}</p>
                  <div className="publication-meta">
                    <span className="publication-role">{pub.role}</span>
                    <span className="publication-dot">•</span>
                    <span className="publication-year">{pub.year}</span>
                  </div>
                  <div className="publication-tags">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="research-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="publication-arrow">
                  <ExternalLink />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Research projects */}
        <div className="research-block">
          <div className="block-heading">
            <Github />
            <h3>Research Projects</h3>
          </div>
          <div className="research-project-grid" ref={projects.ref}>
            {researchProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className={`research-project-card ${
                  projects.inView ? "visible" : ""
                }`}
                style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties}
              >
                <div className="project-card-top">
                  <h4>{project.title}</h4>
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>
                <p>{project.blurb}</p>
                <div className="publication-tags">
                  {project.stack.map((item) => (
                    <span key={item} className="research-tag">
                      {item}
                    </span>
                  ))}
                </div>
                <span className="project-card-link">
                  View on GitHub <ExternalLink />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="research-block">
          <div className="block-heading">
            <GraduationCap />
            <h3>Education</h3>
          </div>
          <div className="education-list">
            <div className="education-row">
              <div>
                <h4>North South University</h4>
                <p>
                  B.Sc. in Computer Science and Engineering — Major in Artificial
                  Intelligence and Machine Learning
                </p>
              </div>
              <div className="education-meta">
                <span>Fall 2022 – Present</span>
                <span className="education-score">CGPA 3.57</span>
              </div>
            </div>
            <div className="education-row">
              <div>
                <h4>Government Yasin College</h4>
                <p>Higher Secondary Certificate (Science)</p>
              </div>
              <div className="education-meta">
                <span>2021</span>
                <span className="education-score">GPA 5.00</span>
              </div>
            </div>
            <div className="education-row">
              <div>
                <h4>Faridpur Zilla School</h4>
                <p>Secondary School Certificate (Science)</p>
              </div>
              <div className="education-meta">
                <span>2019</span>
                <span className="education-score">GPA 4.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
