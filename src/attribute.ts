export const changeHref = (value: string) => {
  window.location.href = value
}

export const reload = () => {
  window.location.replace(window.location.href + '+')
}