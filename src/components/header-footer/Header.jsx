import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import SideMenu from "./SideMenu";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [headerShow, setHeaderShow] = useState(false);

   const toggleMenu = (value) => {
       setMenuOpen(value);
   }

   const handleScroll = () => {
      window.scrollY > 0 ? 
            setHeaderShow(true)
          : setHeaderShow(false);
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
   }, [])



   return (
      <AppBar position="fixed"
            style={{ backgroundColor: headerShow ? '#2F2F2F' : 'transparent',
                     boxShadow: 'none',
                     padding: '10px 0px' }}
      >
         <Toolbar>
               <div className="header_logo">
                  <div className="font_righteous header_logo_venue">The venue</div>
                  <div className="header_logo_title">Musical Events</div>
               </div>
            
               <IconButton aria-label="Menu"
                           color="inherit"
                           onClick={() => toggleMenu(true)}>

                   <MenuIcon />
               </IconButton>
         </Toolbar>
         <SideMenu open={menuOpen} onClose={((value) => toggleMenu(value))}></SideMenu>
      </AppBar>
  );
};

export default Header