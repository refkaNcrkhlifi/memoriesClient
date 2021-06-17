import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
function Post({ post, curentPostId, setCurentPostId }) {
    const dispatch = useDispatch()
    const classes = useStyles()
    const user = JSON.parse(localStorage.getItem('profile'))
    const Likes = () => {
        if (post.likes.length > 0)
            return post.likes.filter(like => like === (user?.result?.googleId || post?.result?._id)) ? (
                <><ThumbUpAltIcon fontSize="small" /> &nbsp;{post.likes.length > 2 ? `you and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`} </>
            ) : (<><ThumbUpAltOutlined fontSize="small" /> &nbsp;{post.likes.length}  ${post.likes.length > 2 ? `likes` : `like`} </>)
        return <><ThumbUpAltOutlined fontSize="small" /> &nbsp; like &nbsp; </>
    }
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {
                (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (

                    <div className={classes.overlay2}>
                        <Button onClick={() => { setCurentPostId(post._id) }} style={{ color: "white" }} size="small"><MoreHorizIcon fontSize="default" /></Button>
                    </div>
                )}
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2"> {post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p"> {post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button disabled={!user?.result} onClick={() => { dispatch(likePost(post._id)) }} color="primary" size="small"><Likes /> </Button>
                {
                    (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <Button onClick={() => {
                            dispatch(deletePost(post._id))
                        }} color="primary" size="small">
                            <DeleteIcon fontSize="small" />
                    Delete</Button>
                    )
                }

            </CardActions>

        </Card>
    );
}

export default Post;