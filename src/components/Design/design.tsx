import * as React from 'react';

import './design.css';
import DesignBlock from './DesignBlock/designBlock';

interface DesignProps {
  scrollToProjects: () => void;
}

const Design: React.FunctionComponent<DesignProps> = ({ scrollToProjects }) => (
    <section className="Design">
        <DesignBlock scrollToProjects={scrollToProjects} />
    </section>
);

export default Design;
