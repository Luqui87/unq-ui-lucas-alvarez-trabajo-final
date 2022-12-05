import axios from 'axios';

const API_URL = 'https://preguntados-api.vercel.app'

export const getDificultades = () =>{
  return axios.get('https://preguntados-api.vercel.app/api/difficulty')
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data))
  }

  export const getQuestions = (difficulty) =>{
    return axios.get( `https://preguntados-api.vercel.app/api/questions?difficulty=${difficulty}`)
    .then(response => response.data)
    .catch (error => Promise.reject(error.response.data))
  }