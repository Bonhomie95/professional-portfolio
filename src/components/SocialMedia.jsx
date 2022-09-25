import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Bonhomie95" target="blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/adeyemi-joseph-770a55244/" target="blank">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
