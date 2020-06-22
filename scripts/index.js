import "../issue-climage-change.html";
import "../issue-education.html";
import "../styles/main.scss"


const NAV_LINK = document.querySelectorAll(".nav__link");
const TOGGLE_MENU = document.getElementById("nav-toggle");
const ICON_TOGGLE_MENU = document.querySelector(".nav__toggle-icon > use");
const ICON_TOGGLE_SEARCH = document.querySelector(".search__toggle-icon > use");

console.log(ICON_TOGGLE_MENU);

// Change active nav link
function changeLinkActive(elem){
	
	//Remove class active from active link
	for(var i =0; i < NAV_LINK.length; i++) {

		NAV_LINK[i].classList.remove("nav__link--active");
			
	}

	//Add class active to current link
	elem.classList.add("nav__link--active");

}

//To change icon of menu or search button
function changeIcon(elem) {

	//checks which element called the functions and then which is the current icon used to change the other one
	if(elem.classList.contains("nav__toggle-button")) {
		if(ICON_TOGGLE_MENU.getAttribute("xlink:href") ==="assets/images/sprite.svg#icon-cross") {		
			ICON_TOGGLE_MENU.setAttribute("xlink:href", "assets/images/sprite.svg#icon-menu");
		} else {		
			ICON_TOGGLE_MENU.setAttribute("xlink:href", "assets/images/sprite.svg#icon-cross");
		}

	} else if(elem.classList.contains("search__toggle-button")) {
		if(ICON_TOGGLE_SEARCH.getAttribute("xlink:href") ==="assets/images/sprite.svg#icon-cross") {		
			ICON_TOGGLE_SEARCH.setAttribute("xlink:href", "assets/images/sprite.svg#icon-search");
		} else {		
			ICON_TOGGLE_SEARCH.setAttribute("xlink:href", "assets/images/sprite.svg#icon-cross");
		}

	} else if(elem.classList.contains("nav__back-button")) {
		ICON_TOGGLE_MENU.setAttribute("xlink:href", "assets/images/sprite.svg#icon-menu");
	}
}


// Closes nav menu 
function closeMenu() {
	TOGGLE_MENU.checked = false;
}