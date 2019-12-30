import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import Logo from '../../components/home/Logo';

const Navbar = ({ siteTitle }) => {
  return (
    <div className='navbar'>
      <Link to='/'><Logo /></Link>
      <h2>{siteTitle}</h2>
    </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Navbar;