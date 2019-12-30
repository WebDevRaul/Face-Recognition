import React from 'react';
import Proptypes from 'prop-types';
import Tilt from 'react-tilt';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logo = ({ loading }) => {

  const img = useStaticQuery(image).file.childImageSharp.fluid
  return (
    <div className='logo'>
      {
        loading && <div className="spinner"></div>
      }
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner">
        <Img fluid={img} />
        </div>
      </Tilt>
    </div>
  )
}

const image = graphql`
  query {
    file(relativePath: {eq: "brain.png"}) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

Logo.propTypes = {
  loading: Proptypes.bool.isRequired
}

export default Logo;