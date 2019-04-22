import * as React from 'react';

import { connect } from 'react-redux';
import { changeProjectsGrid } from '../../../../Actions/actions';
import './designBlockTextSmall.css';

interface DesignBlockTextSmallProps {
  scrollToProjects: () => void;
  changeProjectsGrid: (arg0: string) => void;
}
interface DesignDispatch {
  changeProjectsGrid: (arg0: string) => void;

}

class DesignBlockTextSmallConnected extends React.Component<DesignBlockTextSmallProps> {
  constructor(props: DesignBlockTextSmallProps) {
    super(props);
  }

  public scrollAndChangeProjectsGrid = () => {
    this.props.changeProjectsGrid('Designer');
    this.props.scrollToProjects();
  }

  public render(): JSX.Element {
    return (
      <small onClick={this.scrollAndChangeProjectsGrid} className="Text-small_bg">SEE WORKS</small>
    );
  }
}

function mapDispatchToProps(dispatch: (arg0: object) => void): DesignDispatch {
  return {
    changeProjectsGrid: (type: string) => dispatch(changeProjectsGrid(type)),
  };
}

const DesignBlockTextSmall = connect(null, mapDispatchToProps)(DesignBlockTextSmallConnected);

export default DesignBlockTextSmall;
