import React from 'react';
import { Drawer, List, ListItem } from '@mui/material';


const links = [
   { where: 'featured', value: 'TO top'},
   { where: 'Venue info', value: 'Venue Info'},
   { where: 'highlights', value: 'Highlights'},
   { where: 'pricing', value: 'Pricing'},
   { where: 'location', value: 'Location'}
];

const renderItem = (item) => (   
   // return(  <-- not need to use return in this case, if function returns JSX in "()"
      <ListItem button 
               onClick={() => alert(item.where)} 
               key={item.where}
         >{item.value}
      </ListItem>
   // );
);



const SideMenu = (props) => {
  return (
      <Drawer anchor="right"
              open={props.open}
              onClose={() => props.onClose(false)}>
         <List component="nav">
            { links.map((item) => renderItem(item)) }
         </List>
      </Drawer>
  );
};

export default SideMenu;