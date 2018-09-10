import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './topnav-comp.css';

import JumboComp from './jumbo-comp';

const TopnavComp = (props) => {
  return (

    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">GoodFood GoodMood</NavbarBrand>
        </div>
      </Navbar>
      <div className='jumbo-wrap'>
        <div className='container'>
          <JumboComp />
        </div>
      </div>
    </div>  
    
    

    

  );

}// Topnav


export default TopnavComp;