import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import LockOutLineIcon from '@material-ui/icons/LockOutlined';
import GoogleLogin from 'react-google-login';

import useStyles from './styles';
import { Input } from './Input';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';


function Auth() {
    const [showPassword, setshowPassword] = useState(false)
    const [isSignUp, setisSignUp] = useState(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    const hudelSubmit = () => { }
    const hundelChange = () => { }
    const switchMode = () => setisSignUp((prevState) => !prevState)
    const hundelShowPassword = () => setshowPassword((prevValue) => !prevValue)

    const googleSuccess = (res) => {
        const result = res?.profileObj
        const token = res?.tokenId
        try {
            dispatch({
                type: AUTH,
                payload: {
                    result
                    , token
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    const googleError = () => {
        console.log("google auth failed try again ");
    }
    return (
        <Container component="main" maxWidth={"xs"}>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutLineIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? "sign up" : "sign in"}</Typography>
                <form autoComplete="off" onSubmit={hudelSubmit} className={classes.form}>
                    <Grid container spacing={3}>
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First name" onChange={hundelChange} autoFocus half />
                                <Input name="lastName" label="Last name" onChange={hundelChange} half />
                            </>
                        )}
                        <Input name="email" label="Email adress" onChange={hundelChange} type={"email"} />
                        <Input name="password" label="Password" onChange={hundelChange} type={showPassword ? "text" : "password"} hundelShowPassword={hundelShowPassword} />
                        {isSignUp && (<Input name="confirmPassword" label="Confirm Password" onChange={hundelChange} type={"password"} />)}
                    </Grid>
                    <Button className={classes.submit} variant="contained" type='submit' color='primary' fullWidth>{isSignUp ? "sign up" : "sign in"}</Button>
                    <GoogleLogin
                        clientId="817625482571-23tm7hv01emmqiukpsunch4vmo5isk25.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton}
                                variant="contained"
                                color='primary'
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                fullWidth
                            > google sign in </Button>

                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin" />
                    <Grid container>
                        <Grid item>
                            <Button onClick={switchMode}>{isSignUp ? "already have acount? singin" : "Don't have acount?,singup"}</Button>
                        </Grid>

                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}

export default Auth
