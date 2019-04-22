import * as React from 'react';

import './designBlock.css';
import DesignBlockText from './DesignBlockText/designBlockText';

interface DesignBlockProps {
  scrollToProjects: () => void;
}

const DesignBlock: React.FunctionComponent<DesignBlockProps> = ({ scrollToProjects }) => (
    <div className="Design-block Design-block_purp">
            <DesignBlockText scrollToProjects={scrollToProjects} />
    </div>
);

export default DesignBlock;
