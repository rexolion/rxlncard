import * as React from 'react';

import './frontendBlockText.css';
import FrontendBlockTextHeading from './FrontendBlockTextHeading/frontendBlockTextHeading';
import FrontendBlockTextPara from './FrontendBlockTextPara/frontendBlockTextPara';
import FrontendBlockTextSmall from './FrontendBlockTextSmall/frontendBlockTextSmall';

interface FrontendBlockTextProps {
  scrollToProjects: () => void;
}

const FrontendBlockText: React.FunctionComponent<FrontendBlockTextProps> = ({ scrollToProjects }) => (
    <div className="Text-box">
        <FrontendBlockTextHeading/>
        <FrontendBlockTextPara/>
        <FrontendBlockTextSmall scrollToProjects={scrollToProjects} />
    </div>
);

export default FrontendBlockText;
