import axios from 'axios';

// const URL = "http://localhost:3040/posts"
// axios.interceptors.request.use( req=> {
//    if(localStorage.getItem('profile')){
//        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//    }
//    return req
//     }
//   );
axios.interceptors.request.use((config) => {
  config.headers.genericKey = "someGenericValue";
  if(localStorage.getItem('profile')){
    config.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
       }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const getPostes = async () => await axios.get("posts")
export const AddPostes = async (post) => await axios.post("posts/addPost", post)
export const updatePostes = async (updatedPost, id) => await axios.post(`posts/${id}`, updatedPost)
export const deletePoste = async (postId) => await axios.delete(`posts/${postId}`)
export const likePost = async (postId) => await axios.put(`posts/${postId}`)


export const signUp = async (user) => await axios.post("user/singup", user)
export const signIn = async (user) => await axios.post("user/singin", user)