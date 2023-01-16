export function finalizedHandler(response, callback): void {
  setTimeout(() => {
    window.location.href = response.redirectUrl
    callback(response)
    return true
  }, 2000)
}
