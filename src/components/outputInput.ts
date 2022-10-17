const component = `
<div class="card output-input">
  <div class="card-body">
    <div class="content">
      <textarea class="fs-1 m-0 px-1 py-0 text-color expression-display input-expression" id="input-expression" type="text" readonly></textarea>
      <input class="fs-3 m-0 px-1 py-0 text-color display-result" id="input-result" type="text" readonly>
    </div>
  </div>
</div>
`
export default (() => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML += component
})()
