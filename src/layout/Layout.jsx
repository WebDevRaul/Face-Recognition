import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

import './layout.css';

const Layout = ({ children }) => {

  const { site: { siteMetadata: { title } } } = useStaticQuery(getTitle);
  
  return (
    <>
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