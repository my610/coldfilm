import axios from './axios-custom'

export const seasonInfo = (params) => axios.get('/SeasonInfo', {params})
export const getSeasonInfo = (id) => axios.get(`/SeasonInfo/${id}`)
export const setMonitoring = (id, status) => axios.patch(`/SeasonInfo/${id}`, {status: status})
export const getFilmTranslated = (params) => axios.get('/FilmTranslated', {params})
export const deleteTask = (id) => axios.patch(`/FilmTranslated/${id}`, {status: 0})
