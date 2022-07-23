import Init from '../Init'
const component = `
<div class="card output-input p-0">
  <div class="card-body p-0">
    <nav class="navbar px-1 py-0 m-0">
      <div class="dropdown">
        <button class="dropdown__button ripples">
          <svg width="130" height="499" viewBox="0 0 130 499" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="65" cy="65.0192" rx="65" ry="65.0192" fill="var(--text-color)"/>
            <ellipse cx="65" cy="249.5" rx="65" ry="65.0192" fill="var(--text-color)"/>
            <path d="M130 433.981C130 469.89 100.899 499 65 499C29.1015 499 0 469.89 0 433.981C0 398.072 29.1015 368.961 65 368.961C100.899 368.961 130 398.072 130 433.981Z" fill="var(--text-color)"/>
          </svg>
        </button>
        <ul class="dropdown__menu px-2 py-3 shadow">
          <h6 class="dropdown-header text-h6 m-0 px-1 py-1">
            Theme
          </h6>
          <li 
            class="
              justify-content-between 
              px-1 fs-body switch-toggle-theme 
              dark-mode ripples
            "
          >
            Dark mode
            <label class="switch mx-auto">
              <input type="checkbox" class="switch__input">
              <span class="switch__slider">
              </span>
            </label>
          </li>
          <h6 class="dropdown-header text-h6 m-0 px-1 py-1">
            Application
          </h6>
          <li 
            class="
              toggle-fullscreen 
              justify-content-start px-1 
              fs-body switch-toggle-theme 
              dark-mode ripples
            "
          >
            Toggle full screen
          </li>
        </ul>
      </div>
    </nav>
    <div class="content">
      <input class="fs-1 m-0 px-1 py-0 text-color expression-display input-expression" id="input-expression" type="text" readonly>
      <input class="fs-3 m-0 px-1 py-0 text-color display-result" id="input-result" type="text" readonly>
    </div>
  </div>
</div>
`
export default (() => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML += component
  document.addEventListener('DOMContentLoaded', () => {
    const liToggleTheme = document.querySelector<HTMLLIElement>(
      '.switch-toggle-theme'
    )!
    const switchToggleTheme = document.querySelector<HTMLInputElement>(
      '.switch-toggle-theme input'
    )!
    const localStorageConfig: any = JSON.parse(
      localStorage.getItem('config') || `{"darkMode": false}`
    )
    const liToggleFullscreen =
      document.querySelector<HTMLLIElement>('.toggle-fullscreen')!
    liToggleTheme.addEventListener('click', () => {
      if (switchToggleTheme.checked) {
        switchToggleTheme.checked = false
        localStorageConfig.darkMode = false
      } else {
        switchToggleTheme.checked = true
        localStorageConfig.darkMode = true
      }
      localStorage.setItem('config', JSON.stringify(localStorageConfig))
      new Init({ localStorageConfig, switchToggleTheme })
    })
    liToggleFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
    })
  })
})()