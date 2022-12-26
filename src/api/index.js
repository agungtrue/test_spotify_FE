import client from "../utils/clientApi";

// list of endpoint request
export const getNewReleases = () => client.get('/browse/new-releases');
export const getPlaylists = () => client.get('/browse/featured-playlists');
export const getCategories = () => client.get('/browse/categories');
