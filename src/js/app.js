import Glide from "@glidejs/glide";
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  autoplay: 3000,
  hoverpause: true,
}).mount();

document.addEventListener("DOMContentLoaded", () => {
  const burgerElement = document.getElementById("burger");
  const menuElement = document.getElementById("menu");
  const popupLinks = document.querySelectorAll(".popup-link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelectorAll(".lock-padding");
  let unlock = true;
  const timeout = 800;

  const setUserName = () => {
    const user = localStorage.getItem("user");
    if (user) {
      const { name } = JSON.parse(user);
      document.getElementById("user-name").innerHTML = name;
    }
  };
  setUserName();

  document.forms.signup.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value;
    const tel = this.tel.value;
    const email = this.email.value;
    const password = this.password.value;

    console.log(name, tel, email, password);

    if (name && tel && email && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name, tel, email, password })
      );
      this.reset();
      setUserName();
      window.location.replace("/");
    }
  });

  burgerElement.addEventListener("click", function () {
    const isActive = menuElement.classList.contains("_visible");
    if (isActive) {
      this.classList.remove("_active");
      menuElement.classList.add("_hide");
      setTimeout(() => {
        menuElement.classList.remove("_hide");
        menuElement.classList.remove("_visible");
      }, 400);
    } else {
      this.classList.add("_active");
      menuElement.classList.add("_visible");
    }
  });

  const select = function () {
    const selectHeader = document.querySelectorAll(".select__header");
    const selectBody = document.querySelectorAll(".select__body");
    const selectItem = document.querySelectorAll(".select__item");

    selectHeader.forEach((item) => {
      item.addEventListener("click", selectToggle);
    });
    selectItem.forEach((item) => {
      item.addEventListener("click", selectChoose);
    });
    function selectToggle() {
      this.parentElement.classList.toggle("is-active");
    }
    function selectChoose() {
      let text = this.innerText,
        select = this.closest(".select");
      currentText = select.querySelector(".select__current");
      currentText.innerText = text;
      select.classList.remove("is-active");
    }
  };

  select();

  // let offset = 0;
  // const sliderLine = document.querySelector(".slider__line");

  // document
  //   .querySelector(".button-slider__prev")
  //   .addEventListener("click", function () {
  //     offset = offset + 700;
  //     if (offset > 1400) {
  //       offset = 0;
  //     }

  //     sliderLine.style.left = -offset + "px";
  //   });
  // document
  //   .querySelector(".button-slider__next")
  //   .addEventListener("click", function () {
  //     offset = offset - 700;
  //     if (offset < 0) {
  //       offset = 1400;
  //     }

  //     sliderLine.style.left = -offset + "px";
  //   });

  // const images = document.querySelectorAll(".slider .slider__line img");
  // const sliderLine = document.querySelector(".slider__line");
  // let count = 0;
  // let width;

  // function init() {
  //   console.log("resize");
  //   width = document.querySelector(".slider").offsetWidth;
  //   sliderLine.style.width = width * images.length + "px";
  //   images.forEach((item) => {
  //     item.style.width = width + "px";
  //     item.style.height = "auto";
  //   });
  // }
  // window.addEventListener("resize", init);
  // init();

  // document
  //   .querySelector(".button-slider__next")
  //   .addEventListener("click", function () {
  //     count++;
  //     if (count >= images.length) {
  //       count = 0;
  //     }

  //     rollSlider();
  //   });

  // document
  //   .querySelector(".button-slider__prev")
  //   .addEventListener("click", function () {
  //     count--;
  //     if (count < 0) {
  //       count = images.length - 1;
  //     }
  //     rollSlider();
  //   });

  // function rollSlider() {
  //   sliderLine.style.transform = "translate(-" + count * width + "px";
  // }
});
