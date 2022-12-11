window.addEventListener("load",()=>{
    setTimeout(()=>{
    const $loa = document.querySelector("#loader") ;
    $loa.style.opacity = 0;
    $loa.style.visibility = "hidden";
},1000)
})
const $cImg = document.querySelector(".c-img")
/*;
$cImg.addEventListener("mouseover",()=>{
    const $tittle= document.querySelector(".c-tittle");
    $tittle.style.display ="block";
})
$cImg.addEventListener("mouseout",()=>{
    const $tittle= document.querySelector(".c-tittle");
    $tittle.style.display ="none";
})*/

const $button = document.querySelector(".jkl");
$button.addEventListener("click",()=>{
    const $fil  =document.querySelector(".filtros");
    $fil.classList.toggle("show");
    $button.classList.toggle("up");
    const $vent = document.querySelector(".c-ventas");
    $vent.classList.toggle("v-up");
})
const tit = document.querySelector(".titulo");
const width = window.innerWidth / 2

