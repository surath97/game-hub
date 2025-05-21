import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f0e2db65ebe64fcb9f95135d9c9ee353'
    }
});

