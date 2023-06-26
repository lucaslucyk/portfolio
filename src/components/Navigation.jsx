import React, { useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log("section" + section);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="menu">
        <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleSectionClick('home')}>
          Home
        </li>
        <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleSectionClick('about')}>
          About
        </li>
        <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => handleSectionClick('portfolio')}>
          Projects
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleSectionClick('skills')}>
          Skills
        </li>
        <li className={activeSection === 'resume' ? 'active' : ''} onClick={() => handleSectionClick('resume')}>
          Experience
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
