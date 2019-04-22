import * as React from 'react';

import './frontend.css';
import FrontendBlock from './FrontendBlock/frontendBlock';

interface FrontendProps {
  scrollToProjects: () => void;
}

const Frontend: React.FunctionComponent<FrontendProps> = ({ scrollToProjects }) => (
    <section id="frontend" className="Frontend">
        <FrontendBlock scrollToProjects={scrollToProjects} />
    </section>
);

export default Frontend;
