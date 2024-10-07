import axios from 'axios'

/**
 * Creates an Axios instance configured for authentication API requests.
 * The base URL for the instance is derived from the environment variable `NEXT_PUBLIC_USERS_SERVICE_API_URL`
 * with the path `v2/auth` appended to it.
 *
 * @constant {AxiosInstance} authApi - The configured Axios instance for authentication API.
 */
export const authApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_USERS_SERVICE_API_URL}v2/auth`
})
