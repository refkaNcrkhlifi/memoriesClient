import { AUTH } from "../constants/actionTypes";
import * as authApi from '../api/auth';
export const signIn = (userData, history) => async (dispatch) => {
    try {

        history.push("/")
    } catch (error) {
        console.log("signIn data error ", error.message);
    }
}
export const signUp = (userData, history) => async (dispatch) => {
    try {

        history.push("/")
    } catch (error) {
        console.log("signUp data error ", error.message);
    }
}