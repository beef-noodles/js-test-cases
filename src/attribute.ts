export const changeHref = (value: string) => {
  window.location.href = value
}

export const reload = () => {
  window.location.replace(window.location.href + 'random')
}

export const addHash = (hash: string): string => {
  return window.location.href + `#${hash}`
}