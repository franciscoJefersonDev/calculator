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
      <p class="text-primary fs-3">,</p>
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
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512">
          <path fill="var(--text-color)" d="M483.82 32.45a16.28 16.28 0 00-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 00-14.31 0l-25.11 12.41L359 33.7a16 16 0 00-14.36 0L320 46.07l-24.45-12.34a16 16 0 00-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 00-14.33 0L192 46.1l-24.84-12.41a16 16 0 00-19.36 3.94 16.25 16.25 0 00-3.8 10.65V288l.05.05H336a32 32 0 0132 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0052-52V48a16 16 0 00-12.18-15.55zM416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 01288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 01416 240zm0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 01224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 01416 160z" />
          <path fill="var(--text-color)" d="M336 424v-88a16 16 0 00-16-16H48a32.1 32.1 0 00-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 002.85-6.81C351.07 463.7 336 451 336 424z" />
        </svg>
      </button>
      <button class="toggle-scientific-calc ripples navbar__button">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon calc-basic-icon" viewBox="0 0 512 512">
          <path fill="var(--text-color)" d="M416 80a48.05 48.05 0 00-48-48H144a48.05 48.05 0 00-48 48v352a48.05 48.05 0 0048 48h224a48.05 48.05 0 0048-48zM168 432a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm88 160a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm0-80a24 24 0 1124-24 24 24 0 01-24 24zm112 136a24 24 0 01-48 0v-80a24 24 0 0148 0zm-24-136a24 24 0 1124-24 24 24 0 01-24 24zm19.31-100.69A16 16 0 01352 176H160a16 16 0 01-16-16V96a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-4.69 11.31z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon scientific-icon" viewBox="0 0 512 512">
          <path fill="var(--text-color)" d="M503.58 126.2a16.85 16.85 0 00-27.07-4.55l-51.15 51.15a11.15 11.15 0 01-15.66 0l-22.48-22.48a11.17 11.17 0 010-15.67l50.88-50.89a16.85 16.85 0 00-5.27-27.4c-39.71-17-89.08-7.45-120 23.29-26.81 26.61-34.83 68-22 113.7a11 11 0 01-3.16 11.1L114.77 365.1a56.76 56.76 0 1080.14 80.18L357 272.08a11 11 0 0110.9-3.17c45 12 86 4 112.43-22 15.2-15 25.81-36.17 29.89-59.71 3.83-22.2 1.41-44.44-6.64-61z" />
          <path fill="var(--text-color)" d="M437.33 378.41c-13.94-11.59-43.72-38.4-74.07-66.22l-66.07 70.61c28.24 30 53.8 57.85 65 70.88l.07.08A30 30 0 00383.72 464h1.1a30.11 30.11 0 0021-8.62l.07-.07 33.43-33.37a29.46 29.46 0 00-2-43.53zM118.54 214.55a20.48 20.48 0 00-3-10.76 2.76 2.76 0 012.62-4.22h.06c.84.09 5.33.74 11.7 4.61 4.73 2.87 18.23 12.08 41.73 35.54a34.23 34.23 0 007.22 22.12l66.23-61.55a33.73 33.73 0 00-21.6-9.2 2.65 2.65 0 01-.21-.26l-.65-.69-24.54-33.84a28.45 28.45 0 01-4-26.11 35.23 35.23 0 0111.78-16.35c5.69-4.41 18.53-9.72 29.44-10.62a52.92 52.92 0 0115.19.94 65.57 65.57 0 017.06 2.13 15.46 15.46 0 002.15.63 16 16 0 0016.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85 91.85 0 00-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13 123.13 0 00-46.3 9c-38.37 15.45-63.47 36.58-75.01 47.79l-.09.09A222.14 222.14 0 0063.7 129.5a27 27 0 00-4.7 11.77 7.33 7.33 0 01-7.71 6.17H50.2a20.65 20.65 0 00-14.59 5.9L6.16 182.05l-.32.32a20.89 20.89 0 00-.24 28.72c.19.2.37.39.57.58L53.67 258a21 21 0 0014.65 6 20.65 20.65 0 0014.59-5.9l29.46-28.79a20.51 20.51 0 006.17-14.76z" />
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
