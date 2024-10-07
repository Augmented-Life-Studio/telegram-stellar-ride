/* eslint-disable no-console */
export const logMessage = (msg: any, component?: any) => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT_TAG === 'dev') {
    console.log(msg, component)
  }
}
