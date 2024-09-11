var slider = tns({
  container: ".business-slider",
  items: 1,
  slideBy: 1,
  autoplay: true,
  loop: true,
  controls: false,
  autoplayResetOnVisibility: false,
  autoplayButtonOutput: false,
  autoplay: true,

  nav: true,
  navPosition: "bottom",
  gutter: 15,
  mouseDrag: true,
  edgePadding: 10,
});

// nav

const menu = document.querySelector("#menu");
const nav = document.querySelector(".nav-bar-mobile");

menu.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

$(document).ready(function () {
  // required elements
  var imgPopup = $(".img-popup");
  var imgCont = $(".gallery-img");
  var popupImage = $(".img-popup img");
  var closeBtn = $(".close-btn");

  // handle events
  imgCont.on("click", function () {
    var img_src = $(this).children("img").attr("src");
    imgPopup.children("img").attr("src", img_src);
    imgPopup.addClass("opened");
  });

  $(imgPopup, closeBtn).on("click", function () {
    imgPopup.removeClass("opened");
    imgPopup.children("img").attr("src", "");
  });

  popupImage.on("click", function (e) {
    e.stopPropagation();
  });
});
