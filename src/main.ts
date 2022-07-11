import "./style.scss";
import Ripples from "./Ripples";
// COMPONENTS
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
  const ripplesElements = document.querySelectorAll<HTMLElement>(".ripples")!;
  const localStorageConfig: any = JSON.parse(
    localStorage.getItem("config") || `{"darkMode": false}`
  );

  init({ localStorageConfig, switchToggleTheme });
  new Ripples(ripplesElements);

  liToggleTheme.addEventListener("click", (event: any) => {
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
  liToggleFullscreen.addEventListener("click", (event: any) => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  });
});
