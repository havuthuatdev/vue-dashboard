import axios from 'axios'

export const api = axios.create({
    baseURL: "http://backend-piccine.herokuapp.com/api/"
});