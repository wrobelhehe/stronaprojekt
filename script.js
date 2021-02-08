const menuBtn = document.querySelector(".nav-menu-btn");
const navMenuItems = document.querySelector(".nav-menu-items");
const menuItem = document.querySelectorAll(".menu-item");
let tabs = document.querySelectorAll(".lboard_tabs ul li");
let today = document.querySelector(".today");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let items = document.querySelectorAll(".lboard_item");
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





tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		let currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "today"){
			today.style.display = "block";
		}
		else if(currenttab == "month"){
			month.style.display = "block";
		}
		else{
			year.style.display = "block";
		}

	})
})
