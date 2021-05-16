import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { Container, Grow, Grid } from "@material-ui/core";
import useStyles from './styles';
import Posts from '../Posts/Posts';
import Form from '../Forms/Form';
import { getPosts } from '../../actions/posts';


function Home() {
    const dispatch = useDispatch()
    const [curentPostId, setCurentPostId] = useState(null)
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    const classes = useStyles()
    return (

        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7} >
                        <Posts curentPostId={curentPostId} setCurentPostId={setCurentPostId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form curentPostId={curentPostId} setCurentPostId={setCurentPostId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
