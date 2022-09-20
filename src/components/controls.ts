import { data } from '../calculator/calculator'
import numbers from '../calculator/numbers'
import {
  allClear,
  backspace,
  comma,
  equals,
  parentheses,
  percentage,
} from '../calculator/keys'
import operators from '../calculator/operators'
import scientific from '../calculator/scientific'
import calculateValue from '../calculator/calculateValue'
import format from '../calculator/format'
import Swiper, { Pagination } from 'swiper'
type Component = {
  col1: string[]
  col2: string[]
}

const container1: Component = {
  col1: [
    `<button
      class="c-number button ripples button-animated"
      data-value="8"
    >
      <p class="fs-body">8</p>
    </button>`,
    `<button
      class="c-number button ripples button-animated"
      data-value="6"
    >
      <p class="fs-body">6</p>
    </button>`,
    `<button 
      class="c-number button ripples button-animated"
      data-value="4"
    >
      <p class="fs-body">4</p>
    </button>`,
    `<button 
      class="c-number button ripples button-animated"
      data-value="2"
    >
      <p class="fs-body">2</p>
    </button>`,
    `<button 
      class="c-number button ripples button-animated"
      data-value="0"
    >
      <p class="fs-body">0</p>
    </button>`,
  ],
  col2: [
    `<button 
      class="c-number button ripples button-animated"
      data-value="9"
    >
      <p class="fs-body">9</p>
    </button>`,
    `<button 
      class="c-number button ripples button-animated"
      data-value="7"
    >
      <p class="fs-body">7</p>
    </button>`,
    `<button 
      class="c-number button ripples button-animated"
      data-value="5"
    >
      <p class="fs-body">5</p>
    </button>`,
    `<button 
      class="c-number button ripples button-animated"
      data-value="3"
    >
      <p class="fs-body">3</p>
    </button>`,
    `<button 
      class="c-number button ripples button-animated"
      data-value="1"
    >
      <p class="fs-body">1</p>
    </button>`,
  ],
}
const container2: Component = {
  col1: [
    `<button class="c-backspace button c-2 ripples button-animated">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512">
        <path d="M135.19 390.14a28.79 28.79 0 0021.68 9.86h246.26A29 29 0 00432 371.13V140.87A29 29 0 00403.13 112H156.87a28.84 28.84 0 00-21.67 9.84v0L46.33 256l88.86 134.11z" fill="none" stroke="rgb(var(--primary-color))" stroke-linejoin="round" stroke-width="32"/>
        <path fill="none" stroke="rgb(var(--primary-color))" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336.67 192.33L206.66 322.34M336.67 322.34L206.66 192.33M336.67 192.33L206.66 322.34M336.67 322.34L206.66 192.33"/>
      </svg>
    </button>`,
    `<button class="c-parentheses button c-2 ripples button-animated">
      <P class="text-primary fs-3">( )</P>
    </button>`,
    `<button 
      class="c-operator button c-2 ripples button-animated"
      data-value="/"
    >
     <P class="text-primary fs-3">&divide;</P>
    </button>`,
    `<button 
      class="c-operator button c-2 ripples button-animated"
      data-value="+"
    >
      <P class="text-primary fs-3">&plus;</P>
    </button>`,
    `<button 
      class="c-comma button c-2 ripples button-animated"
      data-value="."
    >
      <p class="text-primary fs-3">.</p>
    </button>`,
  ],
  col2: [
    `<button class="c-all-clear button c-2 ripples button-animated">
       <p class="text-primary fs-3">AC</p>
    </button>`,
    `<button class="c-percentage button c-2 ripples button-animated">
      <p class="text-primary fs-3">&percnt;</p> 
    </button>`,
    `<button 
      class="c-operator button c-2 ripples button-animated"
      data-value="*"
    >
      <p class="text-primary fs-3">&times;</p> 
    </button>`,
    `<button 
      class="c-operator button c-2 ripples button-animated"
      data-value="-"
    >
      <p class="text-primary fs-3">&minus;</p> 
    </button>`,
    `<button class="c-equals button c-2 ripples button-animated equals">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="icon" viewBox="0 0 512 512"
      >
        <path fill="none" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 304h288M112 208h288"/>
      </svg>
    </button>`,
  ],
}
const container3: Component = {
  col1: [
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="sqrt"
    >
      <svg width="440" height="340" viewBox="0 0 440 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M420 20H366.667H313.333H260V20C229.144 20 202.732 42.1307 197.332 72.51L157.589 296.061C155.127 309.911 143.086 320 129.019 320V320C112.992 320 100 307.008 100 290.981V223.333C100 193.878 76.1219 170 46.6667 170V170H20" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round"/>
      </svg>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="sin"
    >
      <p class="fs-body c-text-primary c-fw-400">sin</p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="tan"
    >
      <p class="fs-body c-text-primary c-fw-400">tan</p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="ln"
    >
      <p class="fs-body c-text-primary c-fw-400">ln</p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="x^2"
    >
      <p class="fs-body c-text-primary c-fw-400">x^<sup>2</sup></p>
    </button>`,
  ],
  col2: [
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="cbrt"
    >
      <svg width="440" height="362" viewBox="0 0 440 362" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M420 57H366.667H313.333H260V57C229.078 57 202.544 79.0293 196.856 109.423L157.783 318.22C155.203 332.007 143.167 342 129.14 342V342C113.047 342 100 328.953 100 312.86V252.833C100 223.378 76.1219 199.5 46.6667 199.5V199.5H20" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round"/>
        <path d="M76.8335 166.69C67.8183 166.69 59.7892 165.141 52.7461 162.042C45.7433 158.903 40.2094 154.596 36.1445 149.123C32.1199 143.609 30.0472 137.25 29.9265 130.046H56.2475C56.4085 133.065 57.3945 135.721 59.2056 138.015C61.057 140.269 63.512 142.019 66.5707 143.267C69.6294 144.515 73.0704 145.138 76.8938 145.138C80.8782 145.138 84.3998 144.434 87.4585 143.026C90.5172 141.617 92.9118 139.665 94.6424 137.17C96.373 134.674 97.2383 131.797 97.2383 128.537C97.2383 125.237 96.3126 122.319 94.4613 119.783C92.6502 117.208 90.0342 115.195 86.6133 113.746C83.2326 112.298 79.208 111.573 74.5394 111.573H63.0089V92.3757H74.5394C78.4836 92.3757 81.9649 91.6915 84.9833 90.3231C88.042 88.9548 90.4166 87.0632 92.1069 84.6484C93.7972 82.1934 94.6424 79.3359 94.6424 76.076C94.6424 72.977 93.8979 70.2604 92.4088 67.9261C90.9599 65.5516 88.9073 63.7003 86.2511 62.3722C83.6351 61.044 80.5764 60.38 77.0749 60.38C73.5333 60.38 70.2935 61.0239 67.3555 62.3118C64.4175 63.5594 62.0631 65.3504 60.2923 67.6847C58.5214 70.0189 57.5757 72.7557 57.4549 75.8949H32.4016C32.5224 68.7713 34.5548 62.4929 38.4989 57.0597C42.4431 51.6264 47.7556 47.3804 54.4364 44.3217C61.1576 41.2228 68.744 39.6733 77.1957 39.6733C85.7279 39.6733 93.1935 41.2228 99.5927 44.3217C105.992 47.4207 110.962 51.6063 114.504 56.8785C118.086 62.1106 119.857 67.9865 119.816 74.5064C119.857 81.4287 117.703 87.2041 113.357 91.8324C109.051 96.4607 103.436 99.3987 96.5139 100.646V101.612C105.61 102.779 112.532 105.939 117.281 111.09C122.07 116.201 124.445 122.601 124.404 130.288C124.445 137.331 122.412 143.589 118.307 149.062C114.242 154.536 108.628 158.842 101.464 161.982C94.3003 165.121 86.0901 166.69 76.8335 166.69Z" fill="var(--text-primary)"/>
      </svg>  
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="cos"
    >
      <p class="fs-body c-text-primary c-fw-400">cos</p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="log"
    >
      <p class="fs-body c-text-primary c-fw-400">log</p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="1/x">
      <p class="fs-body c-text-primary c-fw-400">1/x</p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="x^y"
    >
      <p class="fs-body c-text-primary c-fw-400">x^<sup>y</sup></p>    
    </button>`,
  ],
}
const container4: Component = {
  col1: [
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="pi"
    >
      <p class="fs-body c-text-primary c-fw-400">π</p>
    </button>`,
    `<button
      class="c-scientific button c-2 ripples button-animated"
      data-value="asin"
    >
      <p class="fs-body c-text-primary c-fw-400">sin<sup>-1</sup></p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="atan"
    >
      <p class="fs-body c-text-primary c-fw-400">tan<sup>-1</sup></p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="2^x"
    >
      <p class="fs-body c-text-primary c-fw-400">2<sup>x</sup></p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="abs"
    >
      <p class="fs-body c-text-primary c-fw-400">|x|</p>
    </button>`,
  ],
  col2: [
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="e"
    >
      <p class="fs-body c-text-primary c-fw-400">e</p> 
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="acos"
    >
      <p class="fs-body c-text-primary c-fw-400">cos<sup>-1</sup></p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="e^x"
    >
    <p class="fs-body c-text-primary c-fw-400">e<sup>x</sup></p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="x^3"
    >
      <p class="fs-body c-text-primary c-fw-400">x<sup>3</sup></p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="x!"
    >
      <p class="fs-body c-text-primary c-fw-400">x!</p>  
    </button>`,
  ],
}
const container5: Component = {
  col1: [
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="sinh"
    >
      <p class="fs-body c-text-primary c-fw-400">sinh</p>   
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="tanh"
    >
      <p class="fs-body c-text-primary c-fw-400">tanh</p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="acosh"
    >
      <p class="fs-body c-text-primary c-fw-400">cosh<sup>-1</sup></p>
    </button>`,
  ],
  col2: [
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="cosh"
    >
      <p class="fs-body c-text-primary c-fw-400">cosh</p> 
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="asinh"
    >
      <p class="fs-body c-text-primary c-fw-400">sinh<sup>-1</sup></p>
    </button>`,
    `<button 
      class="c-scientific button c-2 ripples button-animated"
      data-value="atanh"
    >
    <p class="fs-body c-text-primary c-fw-400">tanh<sup>-1</sup></p>
    </button>`,
  ],
}
const component = `
<div class="card controls">
  <div class="card-body">
    <nav class="navbar">
      <button class="toggle-history ripples navbar__button">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="icon" 
          viewBox="0 0 512 512"
        >
          <path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="var(--text-color)" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/>
        </svg>
      </button>
      <button class="toggle-scientific-calc ripples navbar__button">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="icon scientific-icon" 
        viewBox="0 0 512 512"
        >
        <path d="M436.67 184.11a27.17 27.17 0 01-38.3 0l-22.48-22.49a27.15 27.15 0 010-38.29l50.89-50.89a.85.85 0 00-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 01-7.67 27.14l-173 160.76a40.76 40.76 0 1057.57 57.54l162.15-173.3a27 27 0 0126.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 00-1.36-.22z" fill="none" stroke="var(--text-color)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/>
        <path d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 01-3.33-21.35 20.76 20.76 0 013.5-4.62l15.68-15.29a18.66 18.66 0 015.63-3.87 18.11 18.11 0 0120 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 01.94 19.92L394.63 444a14 14 0 01-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107" fill="none" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        <path d="M17.34 193.5l29.41-28.74a4.71 4.71 0 013.41-1.35 4.85 4.85 0 013.41 1.35h0a9.86 9.86 0 008.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0119.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 01206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0110.28 11.64 78.92 78.92 0 00-9.21-2.77 68.82 68.82 0 00-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 01-.34 9.16l-18.22 18a6.88 6.88 0 01-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 00-18.27 3.87 11.39 11.39 0 00-2.64 2 14.14 14.14 0 00.42 20.08l1.71 1.6a4.63 4.63 0 010 6.64L71.73 246.6a4.71 4.71 0 01-3.41 1.4 4.86 4.86 0 01-3.41-1.35l-47.57-46.43a4.88 4.88 0 010-6.72z" fill="none" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" 
        class="icon calc-basic-icon" 
        viewBox="0 0 512 512"
      >
        <rect x="112" y="48" width="288" height="416" rx="32" ry="32" fill="none" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
        <path fill="none" stroke="var(--text-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160.01 112H352v64H160.01z"/>
        <circle cx="168" cy="248" r="24" fill="var(--text-color)"/>
        <circle cx="256" cy="248" r="24" fill="var(--text-color)"/>
        <circle cx="344" cy="248" r="24" fill="var(--text-color)"/>
        <circle cx="168" cy="328" r="24" fill="var(--text-color)"/>
        <circle cx="256" cy="328" r="24" fill="var(--text-color)"/>
        <circle cx="168" cy="408" r="24" fill="var(--text-color)"/>
        <circle cx="256" cy="408" r="24" fill="var(--text-color)"/>
        <rect x="320" y="304" width="48" height="128" rx="24" ry="24" fill="var(--text-color)"/>
      </svg>
      
      </button>
      <button class="rad-deg ripples navbar__button">
        <p class="text-rad">Rad</p>
        <p class="text-deg">Deg</p>
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
        <div class="container-sc">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="c-col">
                  ${container3.col1[0]}
                  ${container3.col1[1]}
                  ${container3.col1[2]}
                  ${container3.col1[3]}
                  ${container3.col1[4]}
                </div>
                <div class="c-col">
                  ${container3.col2[0]}
                  ${container3.col2[1]}
                  ${container3.col2[2]}
                  ${container3.col2[3]}
                  ${container3.col2[4]}
                </div>
              </div>
              <div class="swiper-slide">
                <div class="c-col">
                  ${container4.col1[0]}
                  ${container4.col1[1]}
                  ${container4.col1[2]}
                  ${container4.col1[3]}
                  ${container4.col1[4]}
                </div>
                <div class="c-col">
                  ${container4.col2[0]}
                  ${container4.col2[1]}
                  ${container4.col2[2]}
                  ${container4.col2[3]}
                  ${container4.col2[4]}
                </div>
              </div>
              <div class="swiper-slide">
                <div class="c-col">
                  ${container5.col1[0]}
                  ${container5.col1[1]}
                  ${container5.col1[2]}
                </div>
                <div class="c-col">
                  ${container5.col2[0]}
                  ${container5.col2[1]}
                  ${container5.col2[2]}
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`

export default (() => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML += component
  new Swiper('.mySwiper', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>'
      },
    },
    modules: [Pagination],
  })
  const toggleScientificCalc = document.querySelector<HTMLButtonElement>(
    '.toggle-scientific-calc'
  )!
  const radDeg = document.querySelector<HTMLButtonElement>('.rad-deg')!
  const numbersButtons: any =
    document.querySelectorAll<HTMLButtonElement>('.c-number')!
  const backspaceButton =
    document.querySelector<HTMLButtonElement>('.c-backspace')!
  const allClearButton =
    document.querySelector<HTMLButtonElement>('.c-all-clear')!
  const commaButton = document.querySelector<HTMLButtonElement>('.c-comma')!
  const parenthesesButton =
    document.querySelector<HTMLButtonElement>('.c-parentheses')!
  const percentageButton =
    document.querySelector<HTMLButtonElement>('.c-percentage')!
  const equalsButton = document.querySelector<HTMLButtonElement>('.c-equals')!
  const operatorsButtons: any =
    document.querySelectorAll<HTMLButtonElement>('.c-operator')!
  const scientificButtons: any =
    document.querySelectorAll<HTMLButtonElement>('.c-scientific')!
  toggleScientificCalc.addEventListener('click', ({ target }: any) => {
    const container1 = document.querySelector<HTMLDivElement>('.container-1')!
    target.classList.toggle('scientific')
    container1.classList.toggle('none')
  })
  radDeg.addEventListener('click', ({ target }: any) => {
    target.classList.toggle('deg')
    data.deg = !data.deg
    if (data.deg) {
      data.expression.forEach((item, index) => {
        if (item.search(/rad/) > -1) {
          data.expression[index] = data.expression[index].replace(
            /rad/gi,
            'deg'
          )
        }
      })
    } else {
      data.expression.forEach((item, index) => {
        if (item.search(/deg/) > -1) {
          data.expression[index] = data.expression[index].replace(
            /deg/gi,
            'rad'
          )
        }
      })
    }
    console.log(data.expression)
    calculateValue()
    format()
  })
  backspaceButton.addEventListener('click', backspace)
  allClearButton.addEventListener('click', allClear)
  commaButton.addEventListener('click', comma)
  parenthesesButton.addEventListener('click', parentheses)
  percentageButton.addEventListener('click', percentage)
  equalsButton.addEventListener('click', () => {
    equals()
  })
  numbers(numbersButtons)
  operators(operatorsButtons)
  scientific(scientificButtons)
})()
