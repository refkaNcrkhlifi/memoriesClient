import { AUTH } from "../constants/actionTypes";
import * as authApi from '../api';
export const signIn = (userData, history) => async (dispatch) => {
    try {
const {data} = await authApi.signIn(userData)
dispatch({
    type:AUTH,
    payload:data
})
        history.push("/")
    } catch (error) {
        console.log("signIn data error ", error.message);
    }
}
export const signUp = (userData, history) => async (dispatch) => {
    try {
        const {data} = await authApi.signUp(userData)
        dispatch({
            type:AUTH,
            payload:data
        })
        history.push("/")
    } catch (error) {
        console.log("signUp data error ", error.message);
    }
}