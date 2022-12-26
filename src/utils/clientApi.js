import axios from 'axios'

// axios instance
const client = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_TOKEN}`,
    }
});

export default client;