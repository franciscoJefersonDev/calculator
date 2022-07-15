type InitData = {
  localStorageConfig: any
  switchToggleTheme: HTMLInputElement
}
export default class {
  constructor({localStorageConfig, switchToggleTheme}: InitData) {
    if (localStorageConfig.darkMode) {
      document.body.classList.add('dark-mode')
      switchToggleTheme.checked = true
    } else {
      document.body.classList.remove('dark-mode')
      switchToggleTheme.checked = false
    }
  }
}