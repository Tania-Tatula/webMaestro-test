(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{KlCf:function(e,t){var o=document.querySelector("[data-modal-open]"),n=document.querySelector("[data-modal-close]"),s=document.querySelector("[data-modal]"),c=document.querySelector(".body-block");function r(){c.classList.toggle("modal-open"),s.classList.toggle("is-hidden")}o.addEventListener("click",r),n.addEventListener("click",r)},L1EO:function(e,t,o){},QfWi:function(e,t,o){"use strict";o.r(t);o("L1EO"),o("h36j"),o("RtS0"),o("3dw1");function n(e){var t=this.querySelector(".goods-img-url"),o=this.querySelector(".goods-info"),n=this.querySelector(".goods-title_button");e.target==n&&(t.classList.contains("info--oppen")?(o.classList.remove("info--oppen"),t.classList.remove("info--oppen")):(o.classList.add("info--oppen"),t.classList.add("info--oppen")))}document.querySelectorAll(".goods-card").forEach((function(e){return e.addEventListener("click",n)}));o("KlCf"),o("Muwe"),o("y89P");var s="ua",c="ru",r=document.querySelector(".body-block"),i=document.querySelector(".ru-btn"),l=document.querySelector(".ua-btn"),a=document.querySelectorAll(".ru-text"),u=document.querySelectorAll(".ua-text");function d(){r.classList.contains("ua")&&(u.forEach((function(e){return e.removeAttribute("style")})),a.forEach((function(e){return e.setAttribute("style","display: none;")}))),r.classList.contains("ru")&&(a.forEach((function(e){return e.removeAttribute("style")})),u.forEach((function(e){return e.setAttribute("style","display: none;")})))}r.classList.add(s),window.onload=function(){var e=localStorage.getItem("page-language");d(),e&&(r.classList.add(JSON.parse(e)),JSON.parse(e)==c&&(r.classList.replace(s,c),l.removeAttribute("style"),i.setAttribute("style","color: black;")))},i.addEventListener("click",(function(){localStorage.setItem("page-language",JSON.stringify(c)),l.removeAttribute("style"),i.setAttribute("style","color: black;"),r.classList.replace(s,c),d()})),l.addEventListener("click",(function(){localStorage.setItem("page-language",JSON.stringify(s)),i.removeAttribute("style"),l.setAttribute("style","color: black;"),r.classList.replace(c,s),d()})),window.addEventListener("load",d)},h36j:function(e,t){var o=document.querySelector(".menu-button"),n=document.querySelector(".menu-button-svg"),s=document.querySelector(".menu");o.addEventListener("click",(function(){s.classList.contains("is--open")?(n.classList.remove("is--open"),s.classList.remove("is--open")):(n.classList.add("is--open"),s.classList.add("is--open"))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.a8c1cfdfe525b1ffc1e5.js.map