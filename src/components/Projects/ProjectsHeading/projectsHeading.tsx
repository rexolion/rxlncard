import React from 'react';

import { connect } from 'react-redux';
import { changeProjectsGrid, openProjectsDropdown } from '../../Actions/actions';
import './projectsHeading.css';

export interface ProjectsHeadingProps {
  openProjectsDropdown: (arg0: boolean) => void;
  changeProjectsGrid: (arg0: string) => void;
}

export interface ProjectsHeadingState {
  isOpen: boolean;
}

class ProjectsHeadingConnected extends React.Component<ProjectsHeadingProps, ProjectsHeadingState> {
  constructor(props: ProjectsHeadingProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  public handleDeveloperClick = () => {
    this.props.changeProjectsGrid('Developer');
  }

  public handleDesignerClick = () => {
    this.props.changeProjectsGrid('Designer');
  }

  public toogleList = () => (
      <ul>
          <li onClick={this.handleDesignerClick}>Designer</li>
          <li onClick={this.handleDeveloperClick}>Developer</li>
      </ul>
  )

  public toogleDropdown = () => {
    console.log(!this.state.isOpen);
    this.props.openProjectsDropdown(!this.state.isOpen);
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  }

  public render() {
    return (
      <>
            <h1 className="Heading-projects_bg center_margin" onClick={this.toogleDropdown}>Projects as
            <span>Designer<i className="Icon-arrow_down"></i></span>
            </h1>
            {this.state.isOpen && this.toogleList()}
            </>
    );
  }
}

function mapDispatchToProps(dispatch: (arg0: object) => void) {
  return {
    openProjectsDropdown: (toogle:boolean) => dispatch(openProjectsDropdown(toogle)),
    changeProjectsGrid: (type: string) => dispatch(changeProjectsGrid(type)),
  };
}

const ProjectsHeading = connect(null, mapDispatchToProps)(ProjectsHeadingConnected);

export default ProjectsHeading;
