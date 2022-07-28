import { data } from '../calculator/calculator'
import numbers from '../calculator/numbers';
import { allClear, backspace, comma, equals, parentheses, percentage } from '../calculator/keys'
import operators from '../calculator/operators';
import scientific from '../calculator/scientific';
import calculateValue from '../calculator/calculateValue';
import format from '../calculator/format';
import Swiper, { Pagination } from 'swiper';
type Component = {
  col1: string[];
  col2: string[];
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
      <svg width="436" height="340" viewBox="0 0 436 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M125.994 26.6494L23.1729 169.415C18.9417 175.29 19.1829 183.275 23.7611 188.883L125.981 314.117C129.02 317.84 133.571 320 138.376 320H400C408.837 320 416 312.837 416 304V179.375V36C416 27.1634 408.837 20 400 20H138.977C133.832 20 129.001 22.4743 125.994 26.6494Z" stroke="var(--text-primary)" stroke-width="40"/>
        <path d="M236.502 120.503L286 170M286 170L335.497 120.503M286 170L335.497 219.497M286 170L236.502 219.497" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="c-parentheses button c-2 ripples button-animated">
      <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M165.455 20C-28.4847 20 -28.485 420 165.455 420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M274.545 20C468.485 20 468.485 420 274.545 420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button 
      class="c-operator button c-2 ripples button-animated"
      data-value="/"
    >
      <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 220H420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M220 20C192.386 20 170 42.3858 170 70C170 97.6142 192.386 120 220 120C247.614 120 270 97.6142 270 70C270 42.3858 247.614 20 220 20Z" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M270 370C270 397.614 247.614 420 220 420C192.386 420 170 397.614 170 370C170 342.386 192.386 320 220 320C247.614 320 270 342.386 270 370Z" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button 
      class="c-operator button c-2 ripples button-animated"
      data-value="+"
    >
      <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M220 20V220M220 420V220M220 220H20M220 220H420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button 
      class="c-comma button c-2 ripples button-animated"
      data-value="."
    >
      <p class="fs-body">.</p>
    </button>`,
  ],
  col2: [
    `<button class="c-all-clear button c-2 ripples button-animated">
      <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M420 331.111V375.556V386.667C420 405.076 405.076 420 386.667 420V420H353.333H320H286.667V420C268.257 420 253.333 405.076 253.333 386.667V375.556V331.111V286.667V242.222V197.778V153.333V108.889V64.4444V53.3333C253.333 34.9238 268.257 20 286.667 20V20H320H353.333H386.667V20C405.076 20 420 34.9238 420 53.3333V64.4444V108.889M20 242.222V286.667V331.111V375.556V420V197.778M20 242.222V197.778M20 242.222H53.3333H86.6667H120H153.333M20 197.778V153.333V108.889V86.6667C20 72.242 24.6785 58.2064 33.3333 46.6667V46.6667C45.9236 29.8796 65.6829 20 86.6667 20V20V20C107.65 20 127.41 29.8796 140 46.6667V46.6667C148.655 58.2064 153.333 72.242 153.333 86.6667V108.889V153.333V197.778V242.222M153.333 242.222V286.667V331.111V375.556V420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>  
    </button>`,
    `<button class="c-percentage button c-2 ripples button-animated">
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M360 40L40 360" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M280 360C302.091 382.091 337.909 382.091 360 360C382.091 337.909 382.091 302.091 360 280C337.909 257.909 302.091 257.909 280 280C257.909 302.091 257.909 337.909 280 360Z" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M40 120C17.9086 97.9086 17.9086 62.0914 40 40C62.0914 17.9086 97.9086 17.9086 120 40C142.091 62.0914 142.091 97.9086 120 120C97.9086 142.091 62.0914 142.091 40 120Z" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button 
      class="c-operator button c-2 ripples button-animated"
      data-value="*"
    >
      <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M112.5 112.5L225 225M337.5 337.5L225 225M225 225L112.5 337.5M225 225L337.5 112.5" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button 
      class="c-operator button c-2 ripples button-animated"
      data-value="-"
    >
      <svg width="440" height="40" viewBox="0 0 440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20H420" stroke="var(--text-primary)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`,
    `<button class="c-equals button c-2 ripples button-animated equals">
      <svg width="440" height="240" viewBox="0 0 440 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20H420" stroke="rgb(255, 255, 255)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 220H420" stroke="rgb(255, 255, 255)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>
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
        <svg width="425" height="455" viewBox="0 0 425 455" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M72.7497 337.137C92.6607 373.136 122.9 401.024 158.814 416.508C194.727 431.992 234.326 434.215 271.515 422.834C308.705 411.453 341.424 387.1 364.638 353.521C387.853 319.943 400.276 279 399.995 236.993C399.715 194.987 386.747 154.244 363.087 121.035C339.427 87.8265 306.386 63.9917 269.049 53.1989C231.712 42.406 192.147 45.2532 156.444 61.3022C120.74 77.3511 90.8764 105.713 71.4479 142.022" stroke="var(--text-color)" stroke-width="50" stroke-linecap="round"/>
          <path d="M256.258 293.312L245.991 280.734L235.724 268.155L225.457 255.576L223.143 252.742C217.999 246.44 215.189 238.554 215.189 230.419V230.419V217.841V205.262V192.683V180.105V167.526" stroke="var(--text-color)" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M58.9631 30L54.6576 67.4285L50.3521 104.857L46.0466 142.285V142.285C43.9991 160.085 54.9445 175.517 66.917 171.712V171.712M142.445 147.708L117.269 155.709M117.269 155.709L92.093 163.711L66.917 171.712M117.269 155.709L66.917 171.712" stroke="var(--text-color)" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="toggle-scientific-calc ripples navbar__button">
      <svg class="scientific-icon" width="327" height="440" viewBox="0 0 327 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M307 120V86.6667C307 49.8477 277.152 20 240.333 20V20H173.667H107C107 20 107 20 107 20C107 20 78.6495 20 54.1374 20C45.2969 20 36.8214 23.5119 30.5702 29.7631V29.7631C17.5527 42.7806 17.5528 63.8861 30.5702 76.9036L73.6667 120L140.333 186.667V186.667C158.743 205.076 158.743 234.924 140.333 253.333V253.333L107 286.667L73.6667 320L40.3333 353.333L30.5702 363.096C17.5527 376.114 17.5527 397.219 30.5702 410.237V410.237C36.8214 416.488 45.2999 420 54.1405 420H107H240.333V420C277.152 420 307 390.152 307 353.333V320" stroke="var(--text-color)" stroke-width="40" stroke-linecap="round"/>
      </svg>
      <svg class="calc-basic-icon" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M95.0691 20V59.3825V98.765M95.0691 98.765V138.147V177.53M95.0691 98.765H57.5345H20M95.0691 98.765H132.604H170.138" stroke="var(--text-color)" stroke-width="40" stroke-linecap="round"/>
        <path d="M260.754 252.914L287.295 280.762L313.836 308.609M313.836 308.609L340.377 336.457L366.918 364.305M313.836 308.609L287.295 336.457L260.754 364.305M313.836 308.609L340.377 280.762L366.918 252.914" stroke="var(--text-color)" stroke-width="40" stroke-linecap="round"/>
        <path d="M395.345 98.765H357.811H320.276H282.742H245.207" stroke="var(--text-color)" stroke-width="40" stroke-linecap="round"/>
        <path d="M170.138 315.369H132.604H95.0691H57.5345H20" stroke="var(--text-color)" stroke-width="40" stroke-linecap="round"/>
        <ellipse cx="95.069" cy="256.295" rx="18.7673" ry="19.6912" fill="var(--text-color)"/>
        <ellipse cx="95.069" cy="374.442" rx="18.7673" ry="19.6912" fill="var(--text-color)"/>
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
  const toggleScientificCalc = document.querySelector<HTMLButtonElement>('.toggle-scientific-calc')!
  const radDeg = document.querySelector<HTMLButtonElement>('.rad-deg')!
  const numbersButtons: any = document.querySelectorAll<HTMLButtonElement>('.c-number')!
  const backspaceButton = document.querySelector<HTMLButtonElement>('.c-backspace')!
  const allClearButton = document.querySelector<HTMLButtonElement>('.c-all-clear')!
  const commaButton = document.querySelector<HTMLButtonElement>('.c-comma')!
  const parenthesesButton = document.querySelector<HTMLButtonElement>('.c-parentheses')!
  const percentageButton = document.querySelector<HTMLButtonElement>('.c-percentage')!
  const equalsButton = document.querySelector<HTMLButtonElement>('.c-equals')!
  const operatorsButtons: any = document.querySelectorAll<HTMLButtonElement>('.c-operator')!
  const scientificButtons: any = document.querySelectorAll<HTMLButtonElement>('.c-scientific')!
  toggleScientificCalc.addEventListener('click', ( { target }: any ) => {
    const container1 = document.querySelector<HTMLDivElement>('.container-1')!
    target.classList.toggle('scientific')
    container1.classList.toggle('none')
  })
  radDeg.addEventListener('click', ( { target }: any ) => {
    target.classList.toggle('deg')
    data.deg = !data.deg
    if (data.deg) {
      data.expression.forEach((item, index) => {
        if (item.search(/rad/) > -1) {
          data.expression[index] = data.expression[index].replace(/rad/gi, 'deg')
        }
      })
    } else {
      data.expression.forEach((item, index) => {
        if (item.search(/deg/) > -1) {
          data.expression[index] = data.expression[index].replace(/deg/gi, 'rad')
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