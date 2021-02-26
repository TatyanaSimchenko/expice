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
        select = this.closest(".select"),
        currentText = select.querySelector(".select__current");
      currentText.innerText = text;
      select.classList.remove("is-active");
    }
  };

  select();

  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const inp = document.querySelector("#name");
  const span = document.querySelector(".span");

  document.querySelector(".btn").onclick = function (e) {
    e.preventDefault();
    if (!validate(reg, inp.value)) {
      notValid(inp, span, "Not valid E-mail");
    } else {
      valid(inp, span, "");
    }
  };
  function validate(regex, inp) {
    return regex.test(inp);
  }
  function notValid(inp, el, message) {
    inp.classList.add("is-invalid");
    el.innerHTML = message;
  }
  function valid(inp, el, message) {
    inp.classList.remove("is-invalid");
    inp.classList.add("is-valid");
    el.innerHTML = message;
  }
});
