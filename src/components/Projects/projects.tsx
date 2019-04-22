import React, { RefObject } from 'react';

import './projects.css';
import ProjectsBlocks from './ProjectsBlocksWrap/ProjectsBlocks/projectsBlocks';
import ProjectsDivider from './ProjectsDivider/projectsDivider';
import ProjectsHeading from './ProjectsHeading/projectsHeading';

interface ProjectsProps {
    projRef: RefObject<HTMLElement>;
}

const Projects:React.FunctionComponent<ProjectsProps> = ({ projRef }) => (
    <section ref={projRef} className="Projects">
            <ProjectsHeading/>
            <ProjectsDivider/>
            <ProjectsBlocks/>
    </section>
);

export default Projects;
