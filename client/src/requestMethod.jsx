import axios from "axios";

const BASE_URL = "https://hypegenic-api.herokuapp.com/api/"
const TOKEN = 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2Q3YjFjNjYwYjRhZDRkNjc3MDQ3YiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDMwMjUzNDksImV4cCI6MTY0MzI4NDU0OX0.JRYujp__EGNQyAN92ZyVvgmTtt8T1BS0rqQ2qzK4bvU"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2Q3YjFjNjYwYjRhZDRkNjc3MDQ3YiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDUxMDc0NDAsImV4cCI6MTY0NTM2NjY0MH0.iGPfRny6zEfE4zNZaizxfSRZKR1pcosQpgx1pyXy72w`},
})