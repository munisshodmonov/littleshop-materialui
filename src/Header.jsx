import React from "react";
import { Toolbar, Typography, AppBar, makeStyles } from "@material-ui/core";
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded";
import { MakeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
    <AppBar position="static">
        <Toolbar>
            <Typography className = {classes.typographyStyles}>
            John Doe
            </Typography>
            <AcUnitRoundedIcon />
        </Toolbar>
    </AppBar>
    );
};

export default Header;