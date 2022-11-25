import * as React from "react";

import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@material-ui/icons/Adb';
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Typography from "@mui/material/Typography";
// import { Home } from './home';
// import { Buy } from './buy';
// import { Sell } from './sell';
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerComp from "./drawer";
import { Link } from "react-router-dom";
// import { Style } from "@material-ui/icons";


// import AutoStoriesIcon from '@material-ui/icons/AutoStories';
const PAGES = ["Home", "To Buy", "To Sell", "About Us"];
const Rout = ["/", "/Buy", "/Sell", "/Aboutus"];
const ResponsiveAppBar = () => {
  const [value, setValue] = React.useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#002D62" }}>
        <Toolbar>
          <MenuBookIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                Open menu
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="white"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
            >
              {PAGES.map((page, index) => (
                
                  <Tab key={index} label={page} component={Link} to={Rout[index]} />
              
              ))}
            </Tabs>
          )}

          <Button
            sx={{ marginLeft: "auto", background: "#72A0C1" }}
            variant="contained"
          >
            Login/SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default ResponsiveAppBar;
