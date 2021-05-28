import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64  from 'react-file-base64';
import useStyles from './styles';
import { TextField, Paper, Button, Typography } from '@material-ui/core';
import { AddPosts, updatePosts } from '../../actions/posts';

function Form({ curentPostId, setCurentPostId }) {
    const classes = useStyles()
    const [postDatta, setPostDatta] = useState({ message: "", title: "", tags: "", selectedFile: "" });
    const [user, setuser] = useState(null);
    const post = useSelector(state => curentPostId ? state.posts.find((p) => p._id === curentPostId) : null)
    const dispatch = useDispatch()
    const hudelSubmit = (e) => {
        e.preventDefault()
        if (curentPostId === null) {
            dispatch(AddPosts({...postDatta,name:user.result.name}))
        } else {
            dispatch(updatePosts({postDatta,name:user.result.name}, curentPostId))
        }
        clear()
    }
    useEffect(() => {
        if (post) {
            setPostDatta(post)
        }
        setuser(JSON.parse(localStorage.getItem('profile')))
    }, [post])
    const clear = () => {
        setCurentPostId(null)
        setPostDatta({ message: "", title: "", tags: "", selectedFile: "" })
    }

    return (
    !user?(
    <Paper className={classes.paper}>
 <Typography variant='h6' align="center"> please Sign In to add your own memories</Typography>
    </Paper>   
        
        ):(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate onSubmit={hudelSubmit} className={`${classes.root} ${classes.form}`}>
                <Typography variant='h6'>{curentPostId ? "Editing" : "Creationg"} Memory </Typography>
                <TextField value={postDatta.title} name="title" label="Title" variant="outlined" onChange={(e) => setPostDatta({ ...postDatta, title: e.target.value })} fullWidth />
                <TextField value={postDatta.message} name="message" label="Message" variant="outlined" onChange={(e) => setPostDatta({ ...postDatta, message: e.target.value })} fullWidth />
                <TextField value={postDatta.tags} name="tags" label="Tags" variant="outlined" onChange={(e) => setPostDatta({ ...postDatta, tags: e.target.value.split(",") })} fullWidth />

                <div className={classes.fileInput}>
                    <FileBase64  type="file" multiple={false} onDone={({ base64 }) => setPostDatta({ ...postDatta, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" type='submit' color='primary' siza="large" fullWidth>submit</Button>
                <Button variant="contained" onClick={clear} color='secondary' siza="small" fullWidth>clear</Button>
            </form>

        </Paper >)
    );
}

export default Form;