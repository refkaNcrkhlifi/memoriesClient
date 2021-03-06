import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import memories from '../../images/memories.png';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { LOGOUT } from '../../constants/actionTypes';

export default function NavBar() {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const hundelLogOut = () => {
        setUser(null)
        dispatch({ type: LOGOUT })
        history.push('/auth')
    }
    useEffect(() => {
        const token = user?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) hundelLogOut()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <img className={classes.image} src={memories} alt="icon" height="60" />
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" > Memories</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result?.name} src={user.result?.image}>{user.result?.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result?.name}</Typography>
                            <Button variant="contained" color="secondary" className={classes.logout} onClick={hundelLogOut}>Logout</Button>
                        </div>
                    ) : (<Button component={Link} to="/auth" variant="contained" color="primary" className={classes.signin}>Signin</Button>)
                }
            </Toolbar>
        </AppBar>

    )
}
