import * as React from 'react';

import './frontendBlock.css';
import FrontendBlockText from './FrontendBlockText/frontendBlockText';

interface FrontendBlockProps {
  scrollToProjects: () => void;
}

const FrontendBlock: React.FunctionComponent<FrontendBlockProps> = ({ scrollToProjects }) => (
    <div className="Frontend-block Frontend-block_bl">
        <FrontendBlockText scrollToProjects={scrollToProjects}/>
    </div>
);

export default FrontendBlock;
