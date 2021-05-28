import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';
function Posts({ curentPostId, setCurentPostId }) {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts)
   

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid item xs={12} sm={6} md={6} key={post._id} >
                            <Post key={post._id} post={post} curentPostId={curentPostId} setCurentPostId={setCurentPostId} />
                        </Grid>
                    ))}

            </Grid >
        )
    );
}

export default Posts;