import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { TextField, Paper, Button, Typography } from '@material-ui/core';
import { AddPosts } from '../../actions/posts';

function Form(props) {
    const classes = useStyles()
    const [postDatta, setPostDatta] = useState({ creator: "", message: "", title: "", tags: "", selectedFile: "" });
    const dispatch = useDispatch()
    const hudelSubmit = (e) => {
        e.preventDefault()
        dispatch(AddPosts(postDatta))
    }
    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate onSubmit={hudelSubmit} className={`${classes.root} ${classes.form}`}>
                <Typography variant='h6'>Creationg Memory </Typography>
                <TextField value={postDatta.title} name="title" label="Title" variant="outlined" onChange={(e) => setPostDatta({ ...postDatta, title: e.target.value })} fullWidth />
                <TextField value={postDatta.creator} name="creator" label="Creator" variant="outlined" onChange={(e) => setPostDatta({ ...postDatta, creator: e.target.value })} fullWidth />
                <TextField value={postDatta.message} name="message" label="Message" variant="outlined" onChange={(e) => setPostDatta({ ...postDatta, message: e.target.value })} fullWidth />
                <TextField value={postDatta.tags} name="tags" label="Tags" variant="outlined" onChange={(e) => setPostDatta({ ...postDatta, tags: e.target.value })} fullWidth />

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostDatta({ ...postDatta, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" type='submit' color='primary' siza="large" fullWidth>submit</Button>
                <Button variant="contained" onClick={clear} color='secondary' siza="small" fullWidth>clear</Button>
            </form>

        </Paper >
    );
}

export default Form;