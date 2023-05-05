import axios from 'axios';

const consts = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    KEY: '053b6502bd056126a1f9a95166dc9ace',
}

export const fetchHome = async() => {
    const response = await axios.get(`${consts.BASE_URL}trending/movie/week`, {
        params: {
            api_key: consts.KEY,
        }
    })
    const {results} = response.data;
    return results;
}

export const fetchMovies = async(query = '') => {
    const response = await axios.get(`${consts.BASE_URL}search/movie`, {
        params: {
            api_key: consts.KEY,
            query,
        }
    })
    const {results} = response.data;
    return results;
}

export const fetchMovieDetails = async(movieId = '') => {
    const response = await axios.get(`${consts.BASE_URL}movie/${movieId}`, {
        params: {
            api_key: consts.KEY,
        }
    })
    return response.data;
}

export const fetchCredits = async(movieId = '') => {
    const response = await axios.get(`${consts.BASE_URL}movie/${movieId}/credits`, {
        params: {
            api_key: consts.KEY,
        }
    })
    return response.data.cast;
}

export const fetchReviews = async(movieId = '')=>{
    const response = await axios.get(`${consts.BASE_URL}/movie/${movieId}/reviews`,{
        params: {
            api_key: consts.KEY,
        }
    })
    const { results } = response.data;
    return results;
}

export const fetchСonfiguration = async() => {
    const response = await axios.get(`${consts.BASE_URL}configuration`, {
        params: {
            api_key: consts.KEY,
        }
    })
    const {images} = response.data
    return images;
}