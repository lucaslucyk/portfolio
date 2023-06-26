import React, { Component } from 'react';

class Navigation extends Component {
  titles = [];
  sectionNames = Object;

  constructor(props) {
    super(props);
    this.state = {
      activeSection: '',
      forceView: false
    };
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      forceView: !prevState.forceView
    }));
  };

  handleSectionClick = (sectionId) => {
    this.setState({ 
      activeSection: sectionId,
      forceView: false
    });
    this.scrollToSection(sectionId);
  };

  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const { activeSection } = this.state;
    const { forceView } = this.state;

    if (this.props.basicInfo){
      this.sectionNames = this.props.basicInfo.section_name;
    }
    return (
      <nav>
        <ul className={forceView ? 'menu mobile-menu': 'menu'}>
          <li className={activeSection === 'home' ? 'active' : ''} onClick={() => this.handleSectionClick('home')}>
            {this.sectionNames ? this.sectionNames.home : "Home"}
          </li>
          <li className={activeSection === 'about' ? 'active' : ''} onClick={() => this.handleSectionClick('about')}>
            {this.sectionNames ? this.sectionNames.about : "About"}
          </li>
          <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => this.handleSectionClick('portfolio')}>
            {this.sectionNames ? this.sectionNames.projects : "Projects"}
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => this.handleSectionClick('skills')}>
            {this.sectionNames ? this.sectionNames.skills : "Skills"}
          </li>
          <li className={activeSection === 'resume' ? 'active' : ''} onClick={() => this.handleSectionClick('resume')}>
            {this.sectionNames ? this.sectionNames.experience : "Experience"}
          </li>
        </ul>
        <button 
          onClick={this.handleButtonClick}
          className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
        </button>
      </nav>
    );
  }
}

export default Navigation;
