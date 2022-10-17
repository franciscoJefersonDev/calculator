import loadHistory from '../calculator/loadHistory'

const component = `
<div class="card history">
  <div class="card-body">
    <nav class="navbar">
      <button class="toggle-history ripples navbar__button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512">
          <path fill="none" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144" />
        </svg>
      </button>
      <h3 class="m-0 p-0 text-h3">History</h3>
      <div class="dropdown">
        <button class="dropdown__button ripples">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512">
          <circle fill="var(--text-color)" cx="256" cy="256" r="48" />
          <circle fill="var(--text-color)" cx="256" cy="416" r="48" />
          <circle fill="var(--text-color)" cx="256" cy="96" r="48" />
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
    const toggleHistory =
      document.querySelectorAll<HTMLButtonElement>('.toggle-history')!
    const clearHistory =
      document.querySelector<HTMLLIElement>('.clear-history')!
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
      localStorageHistory = [
        {
          expression: [],
          display: [],
        },
      ]
      localStorage.setItem('history', JSON.stringify(localStorageHistory))
      loadHistory()
    })
    loadHistory()
  })
})()
