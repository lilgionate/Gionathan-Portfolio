import PropTypes from "prop-types";

const WorksItems = ({ item, onOpenDemo }) => {
  return (
    <div className="work__card" key={item.id}>
      <div
        className="work__img-wrapper"
        onClick={() => onOpenDemo && onOpenDemo(item)}
      >
        <img src={item.image} alt={item.title} className="work__img" />
        <i className="bx bxs-caret-right-circle work__play-button"></i>
      </div>

      <h3 className="work__title">{item.title}</h3>

      <div className="work__description-wrapper">
        {item.description && (
          <p className="work__description">{item.description}</p>
        )}
      </div>

      {item.githubUrl && (
        <a
          href={item.githubUrl}
          className="work__button github-button"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}
    </div>
  );
};

WorksItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    githubUrl: PropTypes.string,
    description: PropTypes.string,
    videoUrl: PropTypes.string,
  }).isRequired,
  onOpenDemo: PropTypes.func,
};

export default WorksItems;
