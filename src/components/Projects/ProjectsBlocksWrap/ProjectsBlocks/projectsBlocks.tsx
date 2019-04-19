import React, { ReducerState } from 'react';

import { graphql, StaticQuery } from 'gatsby';
import { connect } from 'react-redux';
import './projectsBlocks.css';
import ProjectsBlocksItem from './ProjectsBlocksItem/projectsBlocksItem';

export interface ProjectsData {
  name: string;
  description: string;
  previewImg: string;
  technologies: string;
  type: string;
  relativePath?: string;
}

export interface ProjectsNode {
  node: ProjectsData;
}

export interface ProjectsBlocksComponentProps {
  projects: ProjectsNode[];
  projectsGrid: string;
}

export interface ProjectsBlocksComponentState {
  filteredArr: ProjectsNode[] | [];
  loadedArr: ProjectsNode[] | [];
  currGrid: string;
}

class ProjectsBlocksComponent extends React.Component<ProjectsBlocksComponentProps, ProjectsBlocksComponentState> {
  constructor(props: ProjectsBlocksComponentProps) {
    super(props);
    this.state = {
      filteredArr: [],
      loadedArr: [],
      currGrid: 'Designer',
    };
  }

  public componentDidMount(): void {
    this.loadFiltered();
  }

  public componentDidUpdate(prevProps: ProjectsBlocksComponentProps): void {
    if (prevProps.projectsGrid !== this.props.projectsGrid) {
      this.loadFiltered();
    }
  }
  public render(): JSX.Element {
    const { projects } = this.props;
    const { loadedArr } = this.state;
    return (
            <ul className="Projects-blocks">
                {loadedArr.map((val: ProjectsNode, ind: number) => <ProjectsBlocksItem node={val.node} key={ind} />)}
                <button onClick={this.handleButtonClick}/>
            </ul>
    );
  }

  private handleButtonClick = () => {
    this.loadMore();
  }

  private loadFiltered() {
    let filtered: ProjectsNode[] | [] = [];
    const projects = this.props.projects;
    const propGrid =  this.props.projectsGrid;

    switch (propGrid) {
      case 'Designer':
        filtered = projects.filter(val => val.node.type === 'design');
        break;
      case 'Developer':
        filtered = projects.filter(val => val.node.type === 'website');
        break;
    }
    this.setState({ loadedArr: [], filteredArr: filtered, currGrid: propGrid }, () => this.loadMore());

  }

  private loadMore(): void {
    const filtered = this.state.filteredArr;
    const loaded = filtered.splice(0, 4);

    this.setState(prev => ({ loadedArr: [...prev.loadedArr, ...loaded] }));
  }
}

interface ConnectedProjectsBlocksProps {
  projectsGrid: string;
}

const ConnectedProjectsBlocks: React.FunctionComponent<ConnectedProjectsBlocksProps> = ({ projectsGrid }) => (
    <StaticQuery
        query={
            graphql`
            query ProjectsQuery {
                allProjectsJson {
                    edges {
                        node {
                            name
                            description
                            previewImg
                            technologies
                            type
                        }
                    }
                }
            }
        `
        }

        render={data => (
            <ProjectsBlocksComponent projectsGrid={projectsGrid} projects={data.allProjectsJson.edges} />
        )
        }
    />
);

const mapStateToProps = (state) => {
  return { projectsGrid: state.projectsGrid };
};

const ProjectsBlocks = connect(mapStateToProps)(ConnectedProjectsBlocks);

export default ProjectsBlocks;
