import loadHistory from "../calculator/loadHistory"

const component = `
<div class="card history">
  <div class="card-body">
    <nav class="navbar">
      <button class="toggle-history ripples navbar__button">
        <svg width="450" height="275" viewBox="0 0 450 275" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 25L75 87.5L125 150L175 212.5V212.5C200.633 244.542 249.367 244.542 275 212.5V212.5L325 150L375 87.5L425 25" stroke="var(--text-color)" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>     
      </button>
      <h3 class="m-0 p-0 text-h3">History</h3>
      <div class="dropdown">
        <button class="dropdown__button ripples">
          <svg width="130" height="499" viewBox="0 0 130 499" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="65" cy="65.0192" rx="65" ry="65.0192" fill="var(--text-color)"/>
            <ellipse cx="65" cy="249.5" rx="65" ry="65.0192" fill="var(--text-color)"/>
            <path d="M130 433.981C130 469.89 100.899 499 65 499C29.1015 499 0 469.89 0 433.981C0 398.072 29.1015 368.961 65 368.961C100.899 368.961 130 398.072 130 433.981Z" fill="var(--text-color)"/>
          </svg>
        </button>
        <ul 
          class="dropdown__menu shadow"
        >
          <h6 class="dropdown-header text-h6 m-0 px-1 py-1">History</h6>
          <li class="clear-history justify-content-start px-1 py-0 m-0 fs-body ripples">
            Clear
          </li>
        </ul>
      </div>
    </nav>
    <div class="content"></div>
  </div>
</div>
`
export default (() => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML += component
  document.addEventListener('DOMContentLoaded', () => {
    const toggleHistory = document.querySelectorAll<HTMLButtonElement>('.toggle-history')!
    const clearHistory = document.querySelector<HTMLLIElement>('.clear-history')!
    toggleHistory.forEach((item: HTMLButtonElement) => {
      item.addEventListener('click', () => {
        setTimeout(() => {
          document
            .querySelector<HTMLDivElement>('.controls')
            ?.classList.toggle('none')
          document
            .querySelector<HTMLDivElement>('.history')
            ?.classList.toggle('none')
        }, 200)
      })
    })
    clearHistory.addEventListener('click', () => {
      let localStorageHistory: any = JSON.parse(
        localStorage.getItem('history') || `[{"expression": [], "display": []}]`
      )
      localStorageHistory = [{
        expression: [],
        display: [],
      }]
      localStorage.setItem('history', JSON.stringify(localStorageHistory))
      loadHistory()
    })
    loadHistory()
  })
})()
