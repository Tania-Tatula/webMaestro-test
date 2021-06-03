const Language = {
  UA: "ua",
  RU: "ru",
};

const body = document.querySelector('.body-block');
const ru = document.querySelector('.ru-btn');
const ua = document.querySelector('.ua-btn');
const ruText = document.querySelectorAll('.ru-text');
const uaText = document.querySelectorAll('.ua-text');


// відразу встановлюємо українську мову
body.classList.add(Language.UA);

// записуємо значерння у локал сторадж відразу при загрузці сторінки
// перевіряємо, чи є уже записане значення у локал сторадж, 
// якщо є, то додаємо клас на боді і стиль на кнопку
window.onload = function auditLocalStorage() {
  const bodyClass = localStorage.getItem("page-language");
  langPage ();
  if (bodyClass) {
    body.classList.add(JSON.parse(bodyClass));

    if (JSON.parse(bodyClass) == Language.RU) {
      body.classList.replace(Language.UA, Language.RU);
      ua.removeAttribute("style");
      ru.setAttribute("style", "color: black;")
    }
  }
};


// вішаємо слухачі на кнопки перемикача та на подію загрузки сторінки
ru.addEventListener('click', сhangesLanguageRu);
ua.addEventListener('click', сhangesLanguageUa);
window.addEventListener('load', langPage);


// функція при клікові на кнопку рос. мови додає колір на кнопку та змінює клас на боді
function сhangesLanguageRu(){
  localStorage.setItem("page-language", JSON.stringify(Language.RU));
  ua.removeAttribute("style");
  ru.setAttribute("style", "color: black;")
  body.classList.replace(Language.UA, Language.RU);
  langPage ();
}

// функція при клікові на кнопку укр. мови додає колір на кнопку та змінює клас на боді
function сhangesLanguageUa(){
  localStorage.setItem("page-language", JSON.stringify(Language.UA));
  ru.removeAttribute("style");
  ua.setAttribute("style", "color: black;")
  body.classList.replace(Language.RU, Language.UA);
  langPage ();
}




// додає стилі на елементи з класами тексту тієї мови, яку треба приховати
function langPage (){
    if(body.classList.contains("ua")){
      // uaText.removeAttribute("style");
      uaText.forEach(text => text.removeAttribute("style"));
      ruText.forEach(text => text.setAttribute("style", "display: none;"));
      // ruText.setAttribute("style", "display: none;");
    }
    if(body.classList.contains("ru")){
      // ruText.removeAttribute("style");
      ruText.forEach(text => text.removeAttribute("style"));
      uaText.forEach(text => text.setAttribute("style", "display: none;"));
      // uaText.setAttribute("style", "display: none;")
}
}

