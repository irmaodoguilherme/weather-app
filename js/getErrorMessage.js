export const getErrorMessage = errorCode => {
  const errorCodes = {
    400: 'Request had bad syntax or the parameters supplied were invalid',
    401: 'Unauthorized. API authorization failed',
    403: 'Unauthorized. You do not have permission to access this endpoint',
    404: 'Server has not found a route matching the given URI',
    500: 'Server encountered an unexpected condition which prevented it from fulfilling the request'
  }

  return errorCodes[errorCode] || 'Unknown Error'
}