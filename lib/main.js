const menuAktif = document.querySelector("#menu");
const fabars = document.querySelector(".fa-bars");
const navMobile = document.querySelector("#navMobile");

menuAktif.addEventListener("click", ()=>{
    fabars.classList.toggle("fa-x");
    navMobile.classList.toggle("hidden")
});