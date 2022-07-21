type Component = {
  col1: string[];
  col2: string[];
}

const container1: Component = {
  col1: [
    `<button class="button ripples button-animated"><p class="fs-body">8</p></button>`,
    `<button class="button ripples button-animated"><p class="fs-body">6</p></button>`,
    `<button class="button ripples button-animated"><p class="fs-body">4</p></button>`,
    `<button class="button ripples button-animated"><p class="fs-body">2</p></button>`,
    `<button class="button ripples button-animated"><p class="fs-body">0</p></button>`,
  ],
  col2: [
    `<button class="button ripples button-animated"><p class="fs-body">9</p></button>`,
    `<button class="button ripples button-animated"><p class="fs-body">7</p></button>`,
    `<button class="button ripples button-animated"><p class="fs-body">5</p></button>`,
    `<button class="button ripples button-animated"><p class="fs-body">3</p></button>`,
    `<button class="button ripples button-animated"><p class="fs-body">1</p></button>`,
  ],
}
const container2: Component = {
  col1: [
    `<button class="button c-2 ripples button-animated">
      <svg width="436" height="340" viewBox="0 0 436 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M125.994 26.6494L23.1729 169.415C18.9417 175.29 19.1829 183.275 23.7611 188.883L125.981 314.117C129.02 317.84 133.571 320 138.376 320H400C408.837 320 416 312.837 416 304V179.375V36C416 27.1634 408.837 20 400 20H138.977C133.832 20 129.001 22.4743 125.994 26.6494Z" stroke="var(--text-primary)" stroke-width="40"/>
        <path d="M236.502 120.503L286 170M286 170L335.497 120.503M286 170L335.497 219.497M286 170L236.502 219.497" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="button c-2 ripples button-animated">
      <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M165.455 20C-28.4847 20 -28.485 420 165.455 420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M274.545 20C468.485 20 468.485 420 274.545 420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="button c-2 ripples button-animated">
      <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 220H420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M220 20C192.386 20 170 42.3858 170 70C170 97.6142 192.386 120 220 120C247.614 120 270 97.6142 270 70C270 42.3858 247.614 20 220 20Z" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M270 370C270 397.614 247.614 420 220 420C192.386 420 170 397.614 170 370C170 342.386 192.386 320 220 320C247.614 320 270 342.386 270 370Z" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="button c-2 ripples button-animated">
      <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M220 20V220M220 420V220M220 220H20M220 220H420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="button c-2 ripples button-animated"><p class="fs-body">.</p></button>`,
  ],
  col2: [
    `<button class="button c-2 ripples button-animated">
      <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M420 331.111V375.556V386.667C420 405.076 405.076 420 386.667 420V420H353.333H320H286.667V420C268.257 420 253.333 405.076 253.333 386.667V375.556V331.111V286.667V242.222V197.778V153.333V108.889V64.4444V53.3333C253.333 34.9238 268.257 20 286.667 20V20H320H353.333H386.667V20C405.076 20 420 34.9238 420 53.3333V64.4444V108.889M20 242.222V286.667V331.111V375.556V420V197.778M20 242.222V197.778M20 242.222H53.3333H86.6667H120H153.333M20 197.778V153.333V108.889V86.6667C20 72.242 24.6785 58.2064 33.3333 46.6667V46.6667C45.9236 29.8796 65.6829 20 86.6667 20V20V20C107.65 20 127.41 29.8796 140 46.6667V46.6667C148.655 58.2064 153.333 72.242 153.333 86.6667V108.889V153.333V197.778V242.222M153.333 242.222V286.667V331.111V375.556V420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>  
    </button>`,
    `<button class="button c-2 ripples button-animated">
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M360 40L40 360" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M280 360C302.091 382.091 337.909 382.091 360 360C382.091 337.909 382.091 302.091 360 280C337.909 257.909 302.091 257.909 280 280C257.909 302.091 257.909 337.909 280 360Z" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M40 120C17.9086 97.9086 17.9086 62.0914 40 40C62.0914 17.9086 97.9086 17.9086 120 40C142.091 62.0914 142.091 97.9086 120 120C97.9086 142.091 62.0914 142.091 40 120Z" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="button c-2 ripples button-animated">
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 100L200 200M300 300L200 200M200 200L100 300M200 200L300 100" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="button c-2 ripples button-animated">
      <svg width="440" height="40" viewBox="0 0 440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20H420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="button c-2 ripples button-animated equals">
      <svg width="440" height="240" viewBox="0 0 440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20H420" stroke="rgb(255, 255, 255)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 220H420" stroke="rgb(255, 255, 255)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>    
    </button>`,
  ],
}

const component = `
<div class="card controls p-0">
  <div class="card-body p-0">
    <nav class="navbar px-1 py-0">
      <button class="toggle-history ripples navbar__button">
        <svg width="425" height="455" viewBox="0 0 425 455" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M72.7497 337.137C92.6607 373.136 122.9 401.024 158.814 416.508C194.727 431.992 234.326 434.215 271.515 422.834C308.705 411.453 341.424 387.1 364.638 353.521C387.853 319.943 400.276 279 399.995 236.993C399.715 194.987 386.747 154.244 363.087 121.035C339.427 87.8265 306.386 63.9917 269.049 53.1989C231.712 42.406 192.147 45.2532 156.444 61.3022C120.74 77.3511 90.8764 105.713 71.4479 142.022" stroke="var(--text-color)" stroke-width="50" stroke-linecap="round"/>
          <path d="M256.258 293.312L245.991 280.734L235.724 268.155L225.457 255.576L223.143 252.742C217.999 246.44 215.189 238.554 215.189 230.419V230.419V217.841V205.262V192.683V180.105V167.526" stroke="var(--text-color)" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M58.9631 30L54.6576 67.4285L50.3521 104.857L46.0466 142.285V142.285C43.9991 160.085 54.9445 175.517 66.917 171.712V171.712M142.445 147.708L117.269 155.709M117.269 155.709L92.093 163.711L66.917 171.712M117.269 155.709L66.917 171.712" stroke="var(--text-color)" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </nav>
    <div class="content">
      <div class="container-1">
        <div class="c-col">
          ${container1.col1[0]}
          ${container1.col1[1]}
          ${container1.col1[2]}
          ${container1.col1[3]}
          ${container1.col1[4]}
        </div>
        <div class="c-col">
          ${container1.col2[0]}
          ${container1.col2[1]}
          ${container1.col2[2]}
          ${container1.col2[3]}
          ${container1.col2[4]}
        </div>
      </div>
      <div class="container-2">
        <div class="c-col">
          ${container2.col1[0]}
          ${container2.col1[1]}
          ${container2.col1[2]}
          ${container2.col1[3]}
          ${container2.col1[4]}
        </div>
        <div class="c-col">
          ${container2.col2[0]}
          ${container2.col2[1]}
          ${container2.col2[2]}
          ${container2.col2[3]}
          ${container2.col2[4]}
        </div>
      </div>
    </div>
  </div>
</div>
`

export default (() => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML += component
})()
