import * as React from 'react';

import './projectBlocksButton.css';

interface ProjectBlocksButtonProps {
  moreOnClick: () => void;
}

const ProjectBlocksButton:React.FunctionComponent<ProjectBlocksButtonProps> = ({ moreOnClick }) => (
    <li className="Projects-blocks-item Projects-blocks-one" onClick={moreOnClick}>

    </li>
);

export default ProjectBlocksButton;
