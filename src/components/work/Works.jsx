import { useEffect, useRef, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((p) => p.category.toLowerCase() === item.name)
      );
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  const openDemo = (proj) => {
    setSelected(proj);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close: only flip isOpen; let modal animate out
  const closeDemo = () => setIsOpen(false);

  // Called by modal after exit transition completes
  const handleExited = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((p) => (
          <WorkItems item={p} key={p.id} onOpenDemo={openDemo} />
        ))}
      </div>

      <DemoModal
        isOpen={isOpen}
        project={selected}
        onClose={closeDemo}
        onExited={handleExited}
      />
    </div>
  );
};

export default Works;

/* --- Inline modal component --- */
const DemoModal = ({ isOpen, project, onClose, onExited }) => {
  const [mounted, setMounted] = useState(false); // presence in DOM
  const [show, setShow] = useState(false);       // controls .show class (animation)
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  // Mount/unmount logic
  useEffect(() => {
    if (isOpen && project) {
      setMounted(true); // mount immediately
    } else {
      setShow(false);   // start exit transition
    }
  }, [isOpen, project]);

  // Ensure a real first paint before adding .show (double rAF)
  useEffect(() => {
    if (!mounted || !isOpen) return;
    let raf1, raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setShow(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [mounted, isOpen]);

  // After the modal finishes transitioning out, unmount + notify parent
  const handleModalTransitionEnd = (e) => {
    if (e.target !== modalRef.current) return;
    if (!show) {
      setMounted(false);
      onExited?.();
    }
  };

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!mounted || !project) return null;

  const src = project.videoUrl || project.demoUrl || "";

  return (
    <div
      ref={overlayRef}
      className={`modal-overlay ${show ? "show" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="modal"
        onMouseDown={(e) => e.stopPropagation()}
        onTransitionEnd={handleModalTransitionEnd}
      >
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
            <div className="modal__empty">Coming Soon!</div>
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
