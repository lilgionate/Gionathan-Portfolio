import PropTypes from "prop-types";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <a
        href={item.demoUrl}
        className="work__button demo-button"
        target="_blank"
        rel="noreferrer"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>

      <a
        href={item.githubUrl}
        className="work__button github-button"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

WorksItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorksItems;
