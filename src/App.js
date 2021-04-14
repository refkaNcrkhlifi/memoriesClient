import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';
import useStyles from './styles';
import { getPosts } from './actions/posts';


function App() {
    const dispatch = useDispatch()
    const [curentPostId, setCurentPostId] = useState(null)
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> Memories</Typography>
                <img className={classes.image} src={memories} height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts curentPostId={curentPostId} setCurentPostId={setCurentPostId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form curentPostId={curentPostId} setCurentPostId={setCurentPostId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container >
    );
}

export default App;
