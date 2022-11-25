import React,{useState} from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Menu } from '@material-ui/icons';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

const PAGES = ["Home", "To Buy", "To Sell", "About Us", "logout"];
const Rout = ["/", "/Buy", "/Sell", "/Aboutus"];
const DrawerComp=()=>{
    
const [openDrawer, setOpenDrawer]= useState(false);

    return (
      <React.Fragment>
        <Drawer
          open={openDrawer}
          onclose={() => setOpenDrawer(false)}
          sx={{ background: "lightBlue" }}
        >
          <List>
            {PAGES.map((page, index) => (
              <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                <ListItemIcon>
                  <NavLink to={Rout[index]} style={{textDecoration:"none" , color:"black"}}>
                    <ListItemText>{page}</ListItemText>
                  </NavLink>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{ color: "white" }}
        >
          <Menu />
        </IconButton>
      </React.Fragment>
    );
};

export default DrawerComp;