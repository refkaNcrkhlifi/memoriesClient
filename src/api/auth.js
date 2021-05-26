import axios from 'axios';

export const signUp = async (user) => await axios.post("auth/signup", user)
export const signIn = async (user) => await axios.post("auth/signin", user)