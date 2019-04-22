import * as React from 'react';

import './designBlockText.css';
import DesignBlockTextHeading from './DesignBlockTextHeading/designBlockTextHeading';
import DesignBlockTextPara from './DesignBlockTextPara/designBlockTextPara';
import DesignBlockTextSmall from './DesignBlockTextSmall/designBlockTextSmall';

interface DesignBlockTextProps {
  scrollToProjects: () => void;
}

const DesignBlockText: React.FunctionComponent<DesignBlockTextProps> = ({ scrollToProjects }) => (
    <div className="Text-box">
            <DesignBlockTextHeading/>
            <DesignBlockTextPara/>
            <DesignBlockTextSmall scrollToProjects={scrollToProjects} />
    </div>
);

export default DesignBlockText;
