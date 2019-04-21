import * as React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { ProjectsData, ProjectsNode } from '../projectsBlocks';
import './projectsBlocksItem.css';

interface ProjectItemProps {
  children?: JSX.Element;
  node: ProjectsData;
}

interface ProjectItemQueryNode {
  node: {
    relativePath: string;
    childImageSharp: {
      sizes: FluidObject;
    }
  };
}

interface ProjectItemQueryData {
  images: {
    edges: ProjectItemQueryNode[];
  };
}

const ProjectsBlocksItemComponent:React.FunctionComponent<ProjectItemProps> = ({ node, children  }) => (
    <li className="Projects-blocks-item Projects-blocks-one">
        {children}
    </li>

);

const ProjectsBlocksItem: React.FunctionComponent<ProjectItemProps> = ({ node }) => (
    <StaticQuery
    query={graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `}
    render={(data: ProjectItemQueryData)  => {
      let imageSizes = null;

      if (data.images !== undefined && data.images.edges !== undefined) {
        const image = data.images.edges.find((n: ProjectItemQueryNode) => n.node.relativePath.includes(node.previewImg));
        if (image !== undefined) {
          imageSizes = image.node.childImageSharp.sizes;
        }
      }

      return (
          <ProjectsBlocksItemComponent node={node}>
          <Img className="Projects-blocks-item-img" sizes={{
            src: imageSizes !== null ? imageSizes.src : '',
            aspectRatio: imageSizes !== null ? imageSizes.aspectRatio : 1,
            srcSet: imageSizes !== null ? imageSizes.srcSet : '',
            sizes: imageSizes !== null ? imageSizes.sizes : '',
          }} alt={node.previewImg}/>
          </ProjectsBlocksItemComponent>
      );
    }}
    />
);

export default ProjectsBlocksItem;
