const NAV_LINK = document.querySelectorAll(".nav__link");

// Change active nav link
function changeLinkActive(elem){
	
	//Remove class active from active link
	for(var i =0; i < NAV_LINK.length; i++) {

		NAV_LINK[i].classList.remove("nav__link--active");
			
	}

	//Add class active to current link
	elem.classList.add("nav__link--active");

}
