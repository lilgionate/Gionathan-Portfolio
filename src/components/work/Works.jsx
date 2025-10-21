import { useState, useEffect } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  // NEW: modal state
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  // NEW: open/close handlers
  const openDemo = (proj) => {
    setSelected(proj);
    setIsOpen(true);
    // optional: lock body scroll
    document.body.style.overflow = "hidden";
  };

  const closeDemo = () => {
    setIsOpen(false);
    setSelected(null);
    document.body.style.overflow = "";
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((p) => (
          <WorkItems item={p} key={p.id} onOpenDemo={openDemo} />
        ))}
      </div>

      {/* NEW: Modal */}
      <DemoModal isOpen={isOpen} project={selected} onClose={closeDemo} />
    </div>
  );
};

export default Works;

// --- Inline modal component (keeps files the same) ---
const DemoModal = ({ isOpen, project, onClose }) => {
  if (!isOpen || !project) return null;

  // Prefer videoUrl for embedding; fallback to demoUrl (may be blocked by X-Frame-Options)
  const src = project.videoUrl || project.demoUrl || "";

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onMouseDown={(e) => {
        // close when clicking the dim background
        if (e.target.classList.contains("modal-overlay")) onClose();
      }}
    >
      <div className="modal">
        <div className="modal__header">
          <div>
            <h3 id="demo-modal-title" className="modal__title">
              {project.title}
            </h3>
            {project.description && (
              <p className="modal__desc">{project.description}</p>
            )}
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="modal__body">
          {src ? (
            <div className="modal__video">
              <iframe
                src={src}
                title={`${project.title} – Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              />
            </div>
          ) : (
            <div className="modal__empty">
              No video or embeddable demo provided.
            </div>
          )}

          <div className="modal__actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="work__button github-button"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
