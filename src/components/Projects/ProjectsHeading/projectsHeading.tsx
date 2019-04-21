import React from 'react';

import { connect } from 'react-redux';
import { changeProjectsGrid, openProjectsDropdown } from '../../Actions/actions';
import './projectsHeading.css';

export interface ProjectsHeadingProps {
  openProjectsDropdown: (arg0: boolean) => void;
  changeProjectsGrid: (arg0: string) => void;
  projectsGrid?: string;
}

class ProjectsHeadingConnected extends React.Component<ProjectsHeadingProps> {
  constructor(props: ProjectsHeadingProps) {
    super(props);
  }

  public invertGrid = (grid: string | undefined) => grid === 'Designer' ? 'Developer' : 'Designer';

  public changeGrid = () => {
    const invertedGrid = this.invertGrid(this.props.projectsGrid);
    this.props.changeProjectsGrid(invertedGrid);
  }

  public render(): JSX.Element {
    const { projectsGrid } = this.props;

    return (
      <div className="Heading-projects-toogle-container">
        <h1 className="Heading-projects_bg" >Projects as:</h1>
        <h1 className="Heading-projects_bg Heading-projects-toogle" onClick={this.changeGrid}>{projectsGrid}</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: (arg0: object) => void): ProjectsHeadingProps {
  return {
    openProjectsDropdown: (toogle: boolean) => dispatch(openProjectsDropdown(toogle)),
    changeProjectsGrid: (type: string) => dispatch(changeProjectsGrid(type)),
  };
}

const mapStateToProps = (state: ProjectsHeadingProps) => ({ projectsGrid: state.projectsGrid });

const ProjectsHeading = connect(mapStateToProps, mapDispatchToProps)(ProjectsHeadingConnected);

export default ProjectsHeading;
