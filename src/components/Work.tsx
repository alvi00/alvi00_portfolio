import { useMemo, useState } from "react";
import "./styles/Work.css";
import { projectGroups, projects, ProjectGroup } from "../data/projects";
import useInView from "./utils/useInView";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" />
  </svg>
);

type Filter = ProjectGroup | "all";

const Work = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const section = useInView<HTMLDivElement>();

  const counts = useMemo(() => {
    return projectGroups.reduce<Record<string, number>>((acc, group) => {
      acc[group.id] =
        group.id === "all"
          ? projects.length
          : projects.filter((project) => project.group === group.id).length;
      return acc;
    }, {});
  }, []);

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.group === filter),
    [filter]
  );

  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <div className="work-header">
          <span className="work-eyebrow">Built &amp; shipped</span>
          <h2 className="work-title">Projects</h2>
          <p className="work-subtitle">
            Products, research tools, hackathon systems, and games — {projects.length}{" "}
            builds taken from idea to something you can actually open.
          </p>

          <div className="work-filters" role="tablist" aria-label="Filter projects">
            {projectGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={filter === group.id}
                className={`work-filter ${filter === group.id ? "active" : ""}`}
                onClick={() => setFilter(group.id)}
                data-cursor="disable"
              >
                {group.label}
                <span className="work-filter-count">{counts[group.id]}</span>
              </button>
            ))}
          </div>
        </div>

        <div ref={section.ref}>
          <div
            key={filter}
            className={`project-grid ${section.inView ? "revealed" : ""}`}
          >
            {visible.map((project, index) => (
              <article
                key={project.title}
                className={`project-card group-${project.group}`}
                style={{ "--delay": `${index * 0.06}s` } as React.CSSProperties}
              >
                <div className="project-card-top">
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.badge ? (
                    <span className="project-badge">{project.badge}</span>
                  ) : (
                    project.live && (
                      <span className="project-live">
                        <span className="live-dot"></span>Live
                      </span>
                    )
                  )}
                </div>

                <span className="project-eyebrow">{project.category}</span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-copy">{project.description}</p>

                <div className="project-chips">
                  {project.stack.map((item) => (
                    <span key={item} className="project-chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.live && (
                    <a
                      className="project-link primary"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      {project.liveLabel ?? "Live"}
                      <ArrowIcon />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      className="project-link"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      Code
                      <ArrowIcon />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <a
          className="github-cta"
          href="https://github.com/alvi00?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          Browse all 100+ repositories on GitHub
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default Work;
