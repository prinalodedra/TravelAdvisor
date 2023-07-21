import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, InputBase, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
//import { Typography } from "@mui/material/styles/createTypography";
import { Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from './styles';


const Header = () => {
    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography varient = "h3" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display = "flex">
                    <Typography varient="h3" className={classes.title}>
                        Explore New Places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchicon}>
                                <SearchIcon />
                                <InputBase placeholder= "Search..."  classes={{root: classes.inputRoot, input: classes.inputInput}} />
                            </div>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>    
    );
}

export default Header;