import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const Navbar = ({ siteTitle }) => {
  return (
    <div className='navbar'>
      <h2>
        <Link to='/'>{siteTitle}</Link>
      </h2>
    </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Navbar;