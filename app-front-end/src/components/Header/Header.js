import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    marginnav:{
    marginLeft:'24px'
    }
  }));
export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              PDF Tools
            </Typography>
          
            <Button color="inherit" className={classes.marginnav}> How it works ?</Button>
            <Button color="inherit" className={classes.marginnav}> Feedback </Button>
            <Button color='secondary'className={classes.marginnav} variant='contained'> Login / Signup </Button>

          </Toolbar>
        </AppBar>
      </div>
    )
}
