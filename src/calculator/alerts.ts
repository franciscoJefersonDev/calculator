const alert = (msg: string) => {
  const alert = document.createElement('div')
  alert.classList.add('alert')
  alert.textContent = msg
  return alert
}

export default (msg: string) => {
  const alertComponent = alert(msg)
  document.body.appendChild(alertComponent)
  setTimeout(() => {
    alertComponent.remove()
  }, 1000)
}