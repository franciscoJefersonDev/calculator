export default `
<div class="card history p-0">
  <div class="card-body p-0">
    <nav class="navbar px-1 py-0">
      <h3 class="m-0 p-0 text-h3">History</h3>
      <div class="dropstart p-0 m-0">
        <button 
          class="btn dropdown-toggle p-0 m-0 ripples" 
          type="button"
          id="dropdownHistoryButtonOptions" 
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          <ion-icon name="ellipsis-vertical"></ion-icon>
        </button>
        <ul 
          class="dropdown-menu px-2 py-3 shadow"
          aria-labelledby="dropdownHistoryButtonOptions"
        >
          <h6 class="dropdown-header text-h6 m-0 px-1 py-1">History</h6>
          <li class="justify-content-start px-1 py-0 m-0 fs-body ripples">
            Clear
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>`;
