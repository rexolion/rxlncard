import * as React from 'react';

import './frontendParaContainer.css';
import FrontendParaContainerHeading from './FrontendParaContainerHeading/frontendParaContainerHeading';
import FrontendParaContainerPara from './FrontendParaContainerPara/frontendParaContainerPara';

const FrontendParaContainer = () => (
    <div className="Frontend-para-container">
        <FrontendParaContainerHeading/>
        <FrontendParaContainerPara/>
    </div>
);

export default FrontendParaContainer;
