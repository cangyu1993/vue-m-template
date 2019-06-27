
const env = process.env.NODE_ENV
const URL = "https://yzgsapi.ewangke.com/api";
const imgUrl = "https://yzgsapi.ewangke.com";

let baseURL = env=='development' ? '/api':URL


export default {baseURL,imgUrl}
