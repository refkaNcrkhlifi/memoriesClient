import axios from 'axios';

const URL = "http://localhost:3040/posts"

export const getPostes = async () => await axios.get("posts")
export const AddPostes = async (post) => await axios.post("posts/addPost", post)