import * as React from 'react';

import './frontendBlockText.css';
import FrontendBlockTextHeading from './FrontendBlockTextHeading/frontendBlockTextHeading';
import FrontendBlockTextPara from './FrontendBlockTextPara/frontendBlockTextPara';
import FrontendBlockTextSmall from './FrontendBlockTextSmall/frontendBlockTextSmall';

const FrontendBlockText = () => (
    <div className="Text-box">
        <FrontendBlockTextHeading/>
        <FrontendBlockTextPara/>
        <FrontendBlockTextSmall/>
    </div>
);

export default FrontendBlockText;
