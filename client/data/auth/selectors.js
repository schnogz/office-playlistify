import { path } from 'ramda'

export const isAuthenticated = path(['auth', 'isAuthenticated'])
export const username = path(['auth', 'isLoggingIn'])
