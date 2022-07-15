const component = `
<div class="card controls p-0">
  <div class="card-body p-0">
    <nav class="navbar px-1 py-0">
      <button class="toggle-history ripples navbar__button">
        <ion-icon name="reader"></ion-icon>
      </button>
    </nav>
    <div class="content">
      <div class="container-1">
        <div class="c-col">a</div>
        <div class="c-col">a</div>
        <div class="c-col">a</div>
      </div>
    </div>
  </div>
</div>
`

/*
<div class="container-2">
  <div class="col-1"></div>
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</div>
*/

export default (() => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML += component
})()
