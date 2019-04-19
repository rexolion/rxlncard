import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject, GatsbyImageProps } from 'gatsby-image';
import * as React from 'react';

import './heroImage.css';

export interface HeroImageData {
  placeholderImage: {
    childImageSharp: {
      fluid: FluidObject | undefined,
    },
  };
}

const HeroImage = () => {

  const data: HeroImageData = useStaticQuery(
    graphql`
    query {
        placeholderImage: file(relativePath: { eq: "sky.webp" }) {
            childImageSharp {
                fluid(maxWidth: 2024) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `);

  if (data.placeholderImage != null) {

    const fluidImage = data.placeholderImage.childImageSharp.fluid;
    return (
            <Img className="Hero-image"
                fluid={fluidImage}
               />
    );
  }
  return null;

};

export default HeroImage;
