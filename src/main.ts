import 'swiper/css';
import 'swiper/css/pagination';
import "./style.scss";
import 'bootstrap';
import './components/Dropdown'
import "./components/Ripples";
import Swiper, { Pagination } from "swiper";

import outputInput from "./components/outputInput";
import history from "./components/history";
import controls from "./components/controls";

type InitData = {
  localStorageConfig: any;
  switchToggleTheme: HTMLInputElement;
};

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  ${outputInput}
  ${history}
  ${controls}
`;

new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  modules: [Pagination],
});


window.addEventListener("orientationchange", (event: any) => {
  const angle: number = event.target.screen.orientation.angle
  if(angle === 0) {
    document.querySelector<HTMLDivElement>('.controls')?.classList.remove('none')
    document.querySelector<HTMLDivElement>('.history')?.classList.add('none')
  } else {
    document.querySelector<HTMLDivElement>('.controls')?.classList.remove('none')
    document.querySelector<HTMLDivElement>('.history')?.classList.remove('none')
  }
})


const init = ({ localStorageConfig, switchToggleTheme }: InitData) => {
  if (localStorageConfig.darkMode) {
    document.body.classList.add("dark-mode");
    switchToggleTheme.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    switchToggleTheme.checked = false;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const liToggleTheme = document.querySelector<HTMLLIElement>(
    ".switch-toggle-theme"
  )!;
  const switchToggleTheme = document.querySelector<HTMLInputElement>(
    ".switch-toggle-theme input"
  )!;
  const liToggleFullscreen = document.querySelector<HTMLLIElement>(
    ".toggle-fullscreen"
  )!;
  const toggleHistory = document.querySelectorAll<HTMLButtonElement>('.toggle-history')!
  
  const localStorageConfig: any = JSON.parse(
    localStorage.getItem("config") || `{"darkMode": false}`
  );

  init({ localStorageConfig, switchToggleTheme });

  liToggleTheme.addEventListener("click", () => {
    if (switchToggleTheme.checked) {
      switchToggleTheme.checked = false;
      localStorageConfig.darkMode = false;
    } else {
      switchToggleTheme.checked = true;
      localStorageConfig.darkMode = true;
    }
    localStorage.setItem("config", JSON.stringify(localStorageConfig));
    init({ localStorageConfig, switchToggleTheme });
  });
  liToggleFullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });
  toggleHistory.forEach((item: HTMLButtonElement) => {
    item.addEventListener('click', () => {
      setTimeout(() => {
        document.querySelector<HTMLDivElement>('.controls')?.classList.toggle('none')
        document.querySelector<HTMLDivElement>('.history')?.classList.toggle('none')
      }, 200)
    })
  })
  
});
