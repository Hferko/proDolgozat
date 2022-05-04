let appHeader = `
<header>
    <div id="pontok">
      <span class="pont"></span>
      <span class="pont"></span>
      <span class="pont"></span>
    </div>
    <div class="slider-container">

      <div class="csuszik fakul">
        <div class="numbertext">1 / 3</div>
        <img src="img/banner.jpg" alt="banner">
        <div class="text">"A matematikus olyan gép, amely kávéból tételeket készít."</div>
      </div>

      <div class="csuszik fakul">
        <div class="numbertext">2 / 3</div>
        <img src="img/banner2.jpg" alt="banner">
        <div class="text">"Kávé- vagy sörivás közben nem szokás nemzeti hősnek lenni."</div>
      </div>

      <div class="csuszik fakul">
        <div class="numbertext">3 / 3</div>
        <img src="img/banner3.jpg" alt="banner">
        <div class="text">"A kávé fekete, mint az ördög, forró akár a pokol, tiszta, mint egy angyal, édes, mint a
          szerelem."</div>
      </div>
    </div>
  </header>
`;
document.getElementById("app-header").innerHTML = appHeader;
// --  A header slider ---
let slideIndex = 0
csusztat()

function csusztat() {
  let i
  let slides = document.getElementsByClassName("csuszik")
  let dots = document.getElementsByClassName("pont")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
  setTimeout(csusztat, 6000)
}
