const menuBtn = document.querySelector(".nav-menu-btn");
const navMenuItems = document.querySelector(".nav-menu-items");
const menuItem = document.querySelectorAll(".menu-item");

let tabs = document.querySelectorAll(".lboard_tabs ul li");
let today = document.querySelector(".today");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let items = document.querySelectorAll(".lboard_item");

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;


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



	
function openFunction(){
	document.getElementById("menu").style.width="200px";
	document.getElementById("mainbox").style.marginLeft="200px";
	document.getElementById("mainbox").innerHTML="";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
   document.getElementById("mainbox").innerHTML="&#9776;";
  }



 

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {

  slideInterval = setInterval(nextSlide, intervalTime);
}


