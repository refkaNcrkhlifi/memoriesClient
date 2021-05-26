import axios from 'axios';

// const URL = "http://localhost:3040/posts"

export const getPostes = async () => await axios.get("posts")
export const AddPostes = async (post) => await axios.post("posts/addPost", post)
export const updatePostes = async (updatedPost, id) => await axios.post(`posts/${id}`, updatedPost)
export const deletePoste = async (postId) => await axios.delete(`posts/${postId}`)
export const likePost = async (postId) => await axios.put(`posts/${postId}`)
