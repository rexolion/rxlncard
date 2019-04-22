import React from 'react';

import { connect } from 'react-redux';
import { changeProjectsGrid, openProjectsDropdown } from '../../Actions/actions';
import './projectsHeading.css';

export interface ProjectsHeadingProps {
  openProjectsDropdown: (arg0: boolean) => void;
  changeProjectsGrid: (arg0: string) => void;
  projectsGrid?: string;
  firstButtonPressed: boolean;
  secondButtonPressed: boolean;
}

class ProjectsHeadingConnected extends React.Component<ProjectsHeadingProps> {
  constructor(props: ProjectsHeadingProps) {
    super(props);
    this.state = {
      firstButtonPressed: true,
      secondButtonPressed: false,
    }
  }

  public invertGrid = (grid: string | undefined) => grid === 'Designer' ? 'Developer' : 'Designer';

  public changeGridFirs = () => {
    if(this.state.firstButtonPressed === false) {
      const invertedGrid = this.invertGrid(this.props.projectsGrid);
      this.props.changeProjectsGrid(invertedGrid);
      this.setState({firstButtonPressed: true, secondButtonPressed: false});
    }

  }
  public changeGridSec = () => {
    if(this.state.secondButtonPressed === false) {
      const invertedGrid = this.invertGrid(this.props.projectsGrid);
      this.props.changeProjectsGrid(invertedGrid);
      this.setState({firstButtonPressed: false, secondButtonPressed: true});
    }

  }

  public render(): JSX.Element {
    const { projectsGrid } = this.props;
    const { secondButtonPressed, firstButtonPressed} = this.state;

    return (
      <div className="Button-container">
        <button onClick={this.changeGridFirs} className={firstButtonPressed ? "Button Button_primary" : "Button Button_secondary"}>Designer</button>
        <button onClick={this.changeGridSec} className={secondButtonPressed ? "Button Button_primary" : "Button Button_secondary"} >Developer</button>
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
