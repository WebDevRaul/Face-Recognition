import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Particles from 'react-particles-js';

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

import './layout.css';


const Layout = ({ children }) => {

  const { site: { siteMetadata: { title } } } = useStaticQuery(getTitle);
  const particlesOptions = { 
    particles: { 
      number: { 
        value: 20, 
        density: {
          enable: true, 
          value_area: 300 
        }
      },
      color: {
        value: "#550005"
      },
      line_linked: {
        color: "#7d1419",
      },
    } 
  };
  
  return (
    <>
      <Particles className='particles' params={particlesOptions} />
      <Navbar siteTitle={title} />
      <main>{children}</main>
      <Footer />
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const getTitle = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout;