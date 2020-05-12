const NAV = document.querySelector(".nav");
var x = window.matchMedia("(max-width: 1000px)");


//Change the carousel pictures number
function changeSlider(x){
	if(x.matches) {//If media query matches
		new Glide(".glide", {
			type: "carousel",
			startAt: 0,
			perView: 1,
			focusAt: "center",
		}).mount();
	} else{
		new Glide(".glide", {
			type: "carousel",
			startAt: 0,
			perView: 3,
			focusAt: "center",
		}).mount();
	}
}

changeSlider(x); //Call listener function ate runtime
x.addListener(changeSlider); //Attach listener function on state changes



// Toggle Header Menu
function toggleMenu(e){
	NAV.classList.toggle("hide-mobile");
	e.preventDefault();
}

