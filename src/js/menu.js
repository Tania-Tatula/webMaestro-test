const mobileMenuBtn = document.querySelector('.menu-button');
const mobileIcon = document.querySelector('.menu-button-svg');
const mobileMenuBlock = document.querySelector('.menu');

mobileMenuBtn.addEventListener('click', () =>{
    if(mobileMenuBlock.classList.contains("is--open")){
        mobileIcon.classList.remove("is--open");
        mobileMenuBlock.classList.remove("is--open");
    } else{
    mobileIcon.classList.add("is--open");
    mobileMenuBlock.classList.add("is--open");}
});