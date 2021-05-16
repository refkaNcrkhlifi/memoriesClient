import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import memories from '../../images/memories.png';
import useStyles from './styles';

export default function NavBar() {
    const classes = useStyles()
    const user = null
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" > Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.image}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h2">{user.result.name}</Typography>
                            <Button variant="contained" color="secondary" className={classes.logout}>Logout</Button>
                        </div>
                    ) : (<Button component={Link} to="/auth" variant="contained" color="primary" className={classes.signin}>Signin</Button>)
                }
            </Toolbar>
        </AppBar>

    )
}