import * as React from 'react';

import './designDetails.css';
import DesignDetailsImage from './DesignDetailsImage/designDetailsImage';
import DesignDetailsPara from './DesignDetailsPara/designDetailsPara';

const DesignDetails = () => (
    <div className="Design-details">
        <DesignDetailsImage/>
        <DesignDetailsPara/>
    </div>
);

export default DesignDetails;
