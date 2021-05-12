import axios from 'axios'
import getConfig from 'next/config'

const publicRuntimeConfig = getConfig()?.publicRuntimeConfig

const api = axios.create({
  baseURL: publicRuntimeConfig?.backendUrl || 'http://localhost:3333'
})

export default api
