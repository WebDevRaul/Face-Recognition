import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";

const Navbar = ({ siteTitle }) => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h2>{siteTitle}</h2>
      </Link>
    </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Navbar;