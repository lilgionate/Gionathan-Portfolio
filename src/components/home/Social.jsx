const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://newworkspace-qrf1337.slack.com/team/U05S6SLD42H"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="Slack"
      >
        <i className="uil uil-slack-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/gionathan-vargas-302306195/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/lilgionate"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
