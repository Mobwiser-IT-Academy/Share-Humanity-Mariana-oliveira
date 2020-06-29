export function changeLinkActive(elem){
	
	//Remove class active from active link
	for(var i =0; i < htmlElements.navLink.length; i++) {

		htmlElements.navLink[i].classList.remove("nav__link--active");
			
	}

	//Add class active to current link
	elem.classList.add("nav__link--active");

}
