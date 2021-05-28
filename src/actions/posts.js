import {FETCH_POSTES,ADD_POST,UPDATE_POST,DELETE_POST,LIKE_POST  } from '../constants/actionTypes';
import * as postApi from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await postApi.getPostes()
        dispatch({ type: FETCH_POSTES, payload: data })
    } catch (error) {
        console.log("fetch data error ", error.message);
    }
}
export const AddPosts = (post) => async (dispatch) => {
    try {
        const result = await postApi.AddPostes(post)
        dispatch({ type: ADD_POST, payload: result.data })
    } catch (error) {
        console.log("ADD post error ", error.message);
    }
}
export const updatePosts = (post, curentPostId) => async (dispatch) => {
    try {
        const { data } = await postApi.updatePostes(post, curentPostId)
        dispatch({ type: UPDATE_POST, payload: data })
    } catch (error) {
        console.log("UPDATE post error ", error.message);
    }
}
export const deletePost = (postId) => async (dispatch) => {
    try {
        await postApi.deletePoste(postId)
        dispatch({ type: DELETE_POST, payload: postId })
    } catch (error) {
        console.log("UPDATE post error ", error.message);
    }
}
export const likePost = (postId) => async (dispatch) => {
    try {
        const { data } = await postApi.likePost(postId)
        dispatch({ type: LIKE_POST, payload: data })
    } catch (error) {
        console.log("LIKE post error ", error.message);
    }
}