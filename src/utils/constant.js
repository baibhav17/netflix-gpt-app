export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

export const TMDB_API_ACCESS_TOKEN = process.env.REACT_APP_TMDB_API_ACCESS_TOKEN

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_AUTH_TOKEN
    }
  };