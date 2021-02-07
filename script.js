const menuBtn = document.querySelector(".nav-menu-btn");
const navMenuItems = document.querySelector(".nav-menu-items");
const menuItem = document.querySelectorAll(".menu-item");
menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("open");
    navMenuItems.classList.toggle("open");
});


menuItem.forEach(item =>{
    item.addEventListener("click", ()=>{
        if(menuBtn.classList.contains("open")) {
            menuBtn.classList.toggle("open");
            navMenuItems.classList.toggle("open");
        }
    });
});

$('.left-bar-item-first').click(function () {
    $('.left-bar-items .show').toggleClass("show");
})
