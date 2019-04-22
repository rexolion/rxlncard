import React from 'react';

import { connect } from 'react-redux';
import { changeProjectsGrid, openProjectsDropdown } from '../../Actions/actions';
import './projectsHeading.css';

export interface ProjectsHeadingProps {
  openProjectsDropdown?: (arg0: boolean) => void;
  changeProjectsGrid?: (arg0: string) => void;
  projectsGrid?: string;

}

export interface ProjectsHeadingState {
  firstButtonPressed: boolean;
  secondButtonPressed: boolean;
}

class ProjectsHeadingConnected extends React.Component<ProjectsHeadingProps, ProjectsHeadingState> {
  constructor(props: ProjectsHeadingProps) {
    super(props);
    this.state = {
      firstButtonPressed: true,
      secondButtonPressed: false,
    };
  }

  public componentDidUpdate(prev: ProjectsHeadingProps):void {
    if (prev.projectsGrid !== this.props.projectsGrid && this.props.projectsGrid !== undefined) {
      this.changeButtonsStateByGrid(this.props.projectsGrid);
    }
  }

  public changeButtonsStateByGrid(grid: string): void {
    if (grid === 'Designer') {
      this.setState({ firstButtonPressed: true, secondButtonPressed: false });
    }else {
      this.setState({ firstButtonPressed: false, secondButtonPressed: true });
    }
  }

  public invertGrid = (grid: string | undefined) => grid === 'Designer' ? 'Developer' : 'Designer';

  public changeGridFirs = () => {
    if (this.state.firstButtonPressed === false && this.props.changeProjectsGrid !== undefined) {
      const invertedGrid = this.invertGrid(this.props.projectsGrid);
      this.props.changeProjectsGrid(invertedGrid);
      this.changeButtonsStateByGrid(invertedGrid);
    }

  }
  public changeGridSec = () => {
    if (this.state.secondButtonPressed === false && this.props.changeProjectsGrid !== undefined) {
      const invertedGrid = this.invertGrid(this.props.projectsGrid);
      this.props.changeProjectsGrid(invertedGrid);
      this.changeButtonsStateByGrid(invertedGrid);
    }

  }

  public render(): JSX.Element {
    const { projectsGrid } = this.props;
    const { secondButtonPressed, firstButtonPressed } = this.state;

    return (
      <div className="Button-container">
        <button onClick={this.changeGridFirs} className={firstButtonPressed ? 'Button Button_primary' : 'Button Button_secondary'}>Designer</button>
        <button onClick={this.changeGridSec} className={secondButtonPressed ? 'Button Button_primary' : 'Button Button_secondary'} >Developer</button>
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
