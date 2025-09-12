import { useEffect } from "react";
import PropTypes from "prop-types";

const Message = ({
  open,
  onClose,
  title = "Message sent",
  logoSrc,
  autoHideMs = 50000, 
}) => {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose?.(), autoHideMs);
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onEsc);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose, autoHideMs]);

  if (!open) return null;

  const stop = (e) => e.stopPropagation();

  return (
    <div className="msg-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="msg-card" onClick={stop}>
        <button className="msg-close" aria-label="Close" onClick={onClose} type="button">×</button>

        {logoSrc && (
          <img src={logoSrc} alt="Logo" className="msg-logo" width="200" height="200" />
        )}

        <h4 className="msg-title">{title}</h4>
      </div>
    </div>
  );
};

Message.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  logoSrc: PropTypes.string,
  autoHideMs: PropTypes.number,
};

export default Message;
