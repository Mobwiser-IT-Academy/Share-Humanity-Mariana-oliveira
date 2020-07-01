import "../styles/main.scss";
import "../assets/images/sprite.svg";
import { htmlElements } from "../scripts/app/base/base";



//To change icon of menu or search button
function changeIcon(elem) {

	//checks which element called the functions and then which is the current icon used to change the other one
	if(elem.classList.contains("nav__toggle-button")) {
		if(htmlElements.iconToggleMenu.getAttribute("xlink:href") ==="assets/images/sprite.svg#icon-cross") {		
			htmlElements.iconToggleMenu.setAttribute("xlink:href", "assets/images/sprite.svg#icon-menu");
		} else {		
			htmlElements.iconToggleMenu.setAttribute("xlink:href", "assets/images/sprite.svg#icon-cross");
		}

	} else if(elem.classList.contains("search__toggle-button")) {
		if(htmlElements.iconToggleSearch.getAttribute("xlink:href") ==="assets/images/sprite.svg#icon-cross") {		
			htmlElements.iconToggleSearch.setAttribute("xlink:href", "assets/images/sprite.svg#icon-search");
		} else {		
			htmlElements.iconToggleSearch.setAttribute("xlink:href", "assets/images/sprite.svg#icon-cross");
		}

	} else if(elem.classList.contains("nav__back-button")) {
		htmlElements.iconToggleMenu.setAttribute("xlink:href", "assets/images/sprite.svg#icon-menu");
	}
}


// Closes nav menu 
function closeMenu() {
    htmlElements.toggleMenu.checked = false;
    
}


// CHANGE ACTIVE NAV LINK
document.querySelectorAll('.nav__item').forEach(function(el) {
    el.addEventListener('click', function (elem){
        //Remove class active from active link
        for(var i = 0; i < htmlElements.navLink.length; i++) {

            htmlElements.navLink[i].classList.remove("nav__link--active");			
        }

        //Add class active to current link
        elem.target.classList.add("nav__link--active");
    });	
});