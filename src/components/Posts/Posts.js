import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';
function Posts(props) {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container spacing={3} alignItems="stretch">

            </Grid >
        )
    );
}

export default Posts;