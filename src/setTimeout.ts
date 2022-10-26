export function finalizedHandler(response, callback): boolean|undefined {
  if (response.type === 'finalized') {
    setTimeout(() => {
      window.location.href = response.redirectUrl
      callback(response)
      return true
    }, 2000)
  } else {
    console.log("child false")
    return false
  }
}


export function finalizedHandler1(response, callback): void {
  if (response.type === 'finalized') {
    setTimeout(() => {
      window.location.href = response.redirectUrl
      callback(response)
    }, 2000)
  }
}