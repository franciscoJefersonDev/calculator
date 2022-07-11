export default `<div class="card output-input p-0">
<div class="card-body p-0">
  <nav class="navbar px-1 py-0 m-0">
  <div class="dropdown">
    <button class="dropdown__button ripples">
      <ion-icon name="ellipsis-vertical"></ion-icon>
    </button>
    <ul 
      class="dropdown__menu px-2 py-3 shadow"
      aria-labelledby="dropdownMenuButtonOptions"
    >
      <h6 class="dropdown-header text-h6 m-0 px-1 py-1">Theme</h6>
      <li class="justify-content-start px-1 fs-body switch-toggle-theme dark-mode ripples">
        Dark mode
        <label class="switch mx-auto">
          <input type="checkbox" class="switch__input">
          <span class="switch__slider">
          </span>
        </label>
      </li>
      <li class="toggle-fullscreen justify-content-start px-1 fs-body switch-toggle-theme dark-mode ripples">
        Toggle full screen
      </li>
    </ul>
   </div>
  </nav>
  <div class="content">
    <input class="fs-1 m-0 px-1 py-0" id="input-expression" type="text" value="20+20" readonly>
    <input class="fs-3 m-0 px-1 py-0" id="input-result" type="text" value="40" readonly>
  </div>
</div>
</div>`;

// <div class="dropdown">
//   <button class="dropdown__button ripples">
//     <ion-icon name="ellipsis-vertical"></ion-icon>
//   </button>
//   <ul class="dropdown__menu">
//     <li>This is dropdown</li>
//   </ul>
// </div>

// <div class="dropstart options p-0 m-0">
//     <button 
//       class="btn dropdown-toggle p-0 m-0 ripples"
//       type="button"
//       id="dropdownMenuButtonOptions" 
//       data-bs-toggle="dropdown"
//       data-bs-auto-close="outside"
//       aria-expanded="false"
//     >
//       <ion-icon name="settings"></ion-icon>
//     </button>
//     <ul 
//       class="dropdown-menu px-2 py-3 shadow"
//       aria-labelledby="dropdownMenuButtonOptions"
//     >
//       <h6 class="dropdown-header text-h6 m-0 px-1 py-1">Theme</h6>
//       <li class="justify-content-start px-1 fs-body switch-toggle-theme dark-mode ripples">
//         Dark mode
//         <label class="switch mx-auto">
//           <input type="checkbox" class="switch__input">
//           <span class="switch__slider">
//           </span>
//         </label>
//       </li>
//       <li class="toggle-fullscreen justify-content-start px-1 fs-body switch-toggle-theme dark-mode ripples">
//         Toggle full screen
//       </li>
//     </ul>
//   </div>