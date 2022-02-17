export const changeHref = (value: string) => {
  window.location.href = value
}

export const replace = () => {
  window.location.replace(window.location.href + 'random')
}

export const addHash = (hash: string): string => {
  return window.location.href + `#${hash}`
}

export const sendMessage = (message) => {
  window.top.postMessage({
    type: 'message',
    data: message,
  }, '*' )
}
export const eventListener = ()=> {
  const messageProcessor = (evt) => {
    window.postMessage({data: evt.data}, '*')
    window.removeEventListener('message', messageProcessor)
  }
  window.addEventListener('message', messageProcessor)
}