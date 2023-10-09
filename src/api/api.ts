import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { toCamel } from '@/utils/convert-object'

/**
 * Adds authorization headers to API calls
 * @param {AxiosRequestConfig} request
 */
const authInterceptor = (request: InternalAxiosRequestConfig) => {
  //   const { accessToken } = store.getState().auth

  //   if (accessToken) {
  //     requestConfig.headers.Authorization = `Bearer ${accessToken}`
  //   }

  return request
}

/**
 * Axios response interceptors
 * @param {AxiosResponse} response
 */
const responseInterceptor = (response: AxiosResponse) => {
  response.data = toCamel(response.data)
  return response
}

/**
 * Axios error interceptor
 * @param {AxiosError} axiosError
 */
const errorInterceptor = (axiosError: AxiosError) => {
  if (axiosError && axiosError.response) {
    // Handle error here
    axiosError.response = toCamel(axiosError.response)
    const statusCode = axiosError.response?.status
    if (statusCode === 401) {
      localStorage.clear()
      window.location.reload()
    }
    if (statusCode === 404) {
      window.location.href = window.location.origin + '/not-found'
    }
  }
  return Promise.reject(axiosError)
}

/** Setup an API instance */
export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})

/** Add interceptor */
api.interceptors.request.use(authInterceptor)
api.interceptors.response.use(responseInterceptor, errorInterceptor)
