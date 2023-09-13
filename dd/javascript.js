let scrollc = document.querySelector(".gal");
scrollc.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollc.scrollLeft+=e.deltaY;
})