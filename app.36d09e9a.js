parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("burger"),t=document.getElementById("menu");document.querySelectorAll(".popup-link"),document.querySelector("body"),document.querySelectorAll(".lock-padding");const s=()=>{const e=localStorage.getItem("user");if(e){const{name:t}=JSON.parse(e);document.getElementById("user-name").innerHTML=t}};s(),document.forms.signup.addEventListener("submit",function(e){e.preventDefault();const t=this.name.value,n=this.tel.value,i=this.email.value,c=this.password.value;console.log(t,n,i,c),t&&n&&i&&c&&(localStorage.setItem("user",JSON.stringify({name:t,tel:n,email:i,password:c})),this.reset(),s(),window.location.replace("/"))}),e.addEventListener("click",function(){t.classList.contains("_visible")?(this.classList.remove("_active"),t.classList.add("_hide"),setTimeout(()=>{t.classList.remove("_hide"),t.classList.remove("_visible")},400)):(this.classList.add("_active"),t.classList.add("_visible"))});!function(){const e=document.querySelectorAll(".select__header"),t=document.querySelectorAll(".select__item");function s(){this.parentElement.classList.toggle("is-active")}function n(){let e=this.innerText,t=this.closest(".select");t.querySelector(".select__current").innerText=e,t.classList.remove("is-active")}e.forEach(e=>{e.addEventListener("click",s)}),t.forEach(e=>{e.addEventListener("click",n)})}();const n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,i=document.querySelector("#name"),c=document.querySelector(".span");document.querySelector(".btn").onclick=function(e){e.preventDefault(),function(e,t){return e.test(t)}(n,i.value)?function(e,t,s){e.classList.remove("is-invalid"),e.classList.add("is-valid"),t.innerHTML=s}(i,c,""):function(e,t,s){e.classList.add("is-invalid"),t.innerHTML=s}(i,c,"Not valid E-mail")}});
},{}]},{},["QdeU"], null)
//# sourceMappingURL=app.36d09e9a.js.map