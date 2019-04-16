import React from 'react';

import './designDetailsParaContainer.css';
import DesignDetailsParaContainerHeading from './DesignDetailsParaContainerHeading/designDetailsParaContainerHeading';
import DesignDetailsParaContainerPara from './DesignDetailsParaContainerPara/designDetailsParaContainerPara';

const DesignDetailsParaContainer = () => (
    <div className="Design-para-container center">
        <DesignDetailsParaContainerHeading/>
        <DesignDetailsParaContainerPara/>
    </div>
);

export default DesignDetailsParaContainer;
