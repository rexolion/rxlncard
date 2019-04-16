import React from 'react';

import './projects.css';
import ProjectsBlocks from './ProjectsBlocksWrap/ProjectsBlocks/projectsBlocks';
import ProjectsDivider from './ProjectsDivider/projectsDivider';
import ProjectsHeading from './ProjectsHeading/projectsHeading';

const Projects = () => (
    <section className="Projects">
            <ProjectsHeading/>
            <ProjectsDivider/>
            <ProjectsBlocks/>
    </section>
);

export default Projects;
