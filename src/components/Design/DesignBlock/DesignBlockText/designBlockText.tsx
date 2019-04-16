import * as React from 'react';

import './designBlockText.css';
import DesignBlockTextHeading from './DesignBlockTextHeading/designBlockTextHeading';
import DesignBlockTextPara from './DesignBlockTextPara/designBlockTextPara';
import DesignBlockTextSmall from './DesignBlockTextSmall/designBlockTextSmall';

const DesignBlockText = () => (
    <div className="Text-box">
            <DesignBlockTextHeading/>
            <DesignBlockTextPara/>
            <DesignBlockTextSmall/>
    </div>
);

export default DesignBlockText;
