import * as React from 'react';

import { connect } from 'react-redux';
import { changeProjectsGrid } from '../../../../Actions/actions';
import './frontendBlockTextSmall.css';

interface FrontendBlockTextSmallDispatch {
  changeProjectsGrid: (arg0: string) => void;
}

export interface FrontendBlockTextSmallConnectedProps {
  scrollToProjects: () => void;
  changeProjectsGrid: (arg0: string) => void;
}

class FrontendBlockTextSmallConnected extends React.Component<FrontendBlockTextSmallConnectedProps> {
  constructor(props: FrontendBlockTextSmallConnectedProps) {
    super(props);
  }

  public scrollAndChangeProjectsGrid = () => {
    this.props.changeProjectsGrid('Developer');
    this.props.scrollToProjects();
  }

  public render(): JSX.Element {
    return (
      <small onClick={this.scrollAndChangeProjectsGrid} className="Text-small_bg">SEE WORKS</small>

    );
  }
}

function mapDispatchToProps(dispatch: (arg0: object) => void): FrontendBlockTextSmallDispatch {
  return {
    changeProjectsGrid: (type: string) => dispatch(changeProjectsGrid(type)),
  };
}

const FrontendBlockTextSmall = connect(null, mapDispatchToProps)(FrontendBlockTextSmallConnected);

export default FrontendBlockTextSmall;
