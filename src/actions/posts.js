import * as postApi from '../api/posts';
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await postApi.getPostes()
        dispatch({ type: "FETCH_POSTES", payload: data })
    } catch (error) {
        console.log("fetch data error ", error.message);
    }
}
export const AddPosts = (post) => async (dispatch) => {
    try {
        const reslt = await postApi.AddPostes(post)
        console.log("55555", reslt);
        dispatch({ type: "ADD_POST", payload: reslt.data })
    } catch (error) {
        console.log("ADD post error ", error.message);
    }
}