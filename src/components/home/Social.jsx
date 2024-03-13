import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://app.slack.com/client/T05S35ELFN2/C05SYQ42VLG" className="home__social-icon" target='_blank'>
            <i class="uil uil-slack-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/gionathan-vargas-302306195/" className="home__social-icon" target='_blank'>
            <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/lilgionate" className="home__social-icon" target='_blank'>
            <i class="uil uil-github-alt"></i>
        </a>
    </div>
  );
};

export default Social;