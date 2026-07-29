import "./styles/Career.css";

type Track = "research" | "engineering" | "leadership";

type Role = {
  kind: string;
  track: Track;
  role: string;
  org: string;
  location: string;
  period: string;
  active?: boolean;
  blurb: string;
  tags: string[];
};

const timeline: Role[] = [
  {
    kind: "Leadership",
    track: "leadership",
    role: "In-Charge, Graphics Team",
    org: "IEEE NSU Student Branch",
    location: "Dhaka, BD",
    period: "Mar 2023 — Mar 2025",
    blurb:
      "Led the graphics team for flagship branch events including SPAC, owning delivery end to end from brief to final assets. Coordinated core volunteer teams, mentored members, and kept output aligned with event themes and deadlines.",
    tags: ["Team Leadership", "Event Delivery", "Illustrator", "Branding"],
  },
  {
    kind: "Leadership",
    track: "leadership",
    role: "Sub Executive, Graphics Team",
    org: "IEEE NSU PES Student Branch",
    location: "Dhaka, BD",
    period: "Apr 2023 — Mar 2025",
    blurb:
      "Produced visual assets to fixed deadlines and quality standards, contributing creative input to sharpen the final designs.",
    tags: ["Visual Design", "Deadlines", "Collaboration"],
  },
  {
    kind: "Engineering",
    track: "engineering",
    role: "Junior Game Developer",
    org: "Mini Game Lab Ltd.",
    location: "Dhaka, BD",
    period: "2025",
    blurb:
      "Built and tested games in Unity — designing mechanics, fixing bugs, and improving player experience alongside artists and designers.",
    tags: ["Unity", "C#", "Game Mechanics", "QA"],
  },
  {
    kind: "Engineering",
    track: "engineering",
    role: "Freelance Developer",
    org: "Self-Employed",
    location: "Remote",
    period: "2025",
    blurb:
      "Interactive p5.js games, websites, Java applications, and machine learning models — whatever tools the project needed. Every gig was a chance to level up.",
    tags: ["Full Stack", "p5.js", "Java", "Machine Learning"],
  },
  {
    kind: "Research",
    track: "research",
    role: "Research Assistant",
    org: "Duke University · Kamaleswaran Lab",
    location: "Remote · Durham, NC",
    period: "Aug 2025 — Present",
    active: true,
    blurb:
      "Authored the benchmarks, evaluation, frameworks, and datasets sections of a review paper. Defined the evaluation protocol and metrics used to benchmark three deep learning architectures on the MIMIC clinical dataset, and built an encoder integrated with Qwen3 to deliver a RAG-based retrieval system for clinical data tasks.",
    tags: ["MIMIC", "Benchmarking", "Qwen3", "RAG", "Technical Writing"],
  },
  {
    kind: "Research",
    track: "research",
    role: "Student Research Assistant",
    org: "North South University · TriModal AI Lab",
    location: "Dhaka, BD",
    period: "Nov 2025 — Present",
    active: true,
    blurb:
      "Designed the automated edge-case generation and iterative debugging loop behind a Bangla-to-Python code generation system — ranked 10th worldwide at BLP-2025 and published in the ACL Anthology. Specified and built MediTalk AI, and delivered the Meeting Agent pipeline.",
    tags: ["Qwen2.5", "Chain-of-Thought", "FastAPI", "Django", "Evaluation"],
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-grid-bg"></div>
      <div className="career-container">
        <div className="career-header">
          <span className="career-eyebrow">Trajectory</span>
          <h2>
            My career <span>&</span>
            <br /> experience
          </h2>
          <p className="career-intro">
            From graphics teams and game studios to clinical deep learning
            research — six roles, one throughline.
          </p>
        </div>

        <div className="career-info">
          <div className="career-timeline">
            {/* separate clip layer: the glowing dot below must not be clipped */}
            <div className="career-stream-clip">
              <div className="career-stream"></div>
            </div>
            <div className="career-dot"></div>
          </div>

          {timeline.map((item, index) => (
            <div
              key={`${item.org}-${item.role}`}
              className={`career-info-box track-${item.track} ${
                index % 2 === 0 ? "career-left" : "career-right"
              }`}
              style={{ gridRow: index + 1 }}
            >
              <div className="career-node">
                <span className="career-node-core"></span>
                <span className="career-node-ring"></span>
              </div>

              <div className="career-card">
                <div className="career-card-top">
                  <span className="career-kind">{item.kind}</span>
                  <span className="career-period">
                    {item.active && <span className="career-active-dot"></span>}
                    {item.period}
                  </span>
                </div>

                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.org}</h5>
                </div>

                <span className="career-location">{item.location}</span>
                <p>{item.blurb}</p>

                <div className="career-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="career-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
