import axios from 'axios'
// base pemanggilan base api yang berada di env
const https = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL_BASE,
  })
}

export default https
