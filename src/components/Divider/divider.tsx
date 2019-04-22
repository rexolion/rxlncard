import * as React from 'react';

import './divider.css';

interface DividerProps {
    size: string;
}

const Divider:React.FunctionComponent<DividerProps> = ({size}) => (
    <div className={`Divider_${size}`}></div>
);

export default Divider;
