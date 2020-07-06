import "../styles/main.scss";
import { htmlElements } from "../scripts/app/base/base";
import { changeLinkActive } from "../scripts/app/ui-interactions/change-link-active";
import { uploadSVG } from "../scripts/app/ui-interactions/upload-svg";
import { changeIcon } from '../scripts/app/ui-interactions/change-icon';


//To change icon of menu or search button
// function changeIcon(elem) {

// 	//checks which element called the functions and then which is the current icon used to change the other one
// 	if(elem.classList.contains("nav__toggle-button")) {
// 		if(htmlElements.iconToggleMenu.getAttribute("xlink:href") ==="assets/images/sprite.svg#icon-cross") {		
// 			htmlElements.iconToggleMenu.setAttribute("xlink:href", "assets/images/sprite.svg#icon-menu");
// 		} else {		
// 			htmlElements.iconToggleMenu.setAttribute("xlink:href", "assets/images/sprite.svg#icon-cross");
// 		}

// 	} else if(elem.classList.contains("search__toggle-button")) {
// 		if(htmlElements.iconToggleSearch.getAttribute("xlink:href") ==="assets/images/sprite.svg#icon-cross") {		
// 			htmlElements.iconToggleSearch.setAttribute("xlink:href", "assets/images/sprite.svg#icon-search");
// 		} else {		
// 			htmlElements.iconToggleSearch.setAttribute("xlink:href", "assets/images/sprite.svg#icon-cross");
// 		}

// 	} else if(elem.classList.contains("nav__back-button")) {
// 		htmlElements.iconToggleMenu.setAttribute("xlink:href", "assets/images/sprite.svg#icon-menu");
// 	}
// }


// Closes nav menu 
function closeMenu() {
    htmlElements.toggleMenu.checked = false;
    
}


// CHANGE ACTIVE NAV LINK
htmlElements.navItems.forEach(function(el) {
    el.addEventListener('click', function(elem) {changeLinkActive(elem)});	
});


// CHANGE ICON 
htmlElements.iconChange.forEach(function(el) {
    el.addEventListener('click', function(elem) {changeIcon(elem)});	
});




//Inject all SVG files on DOM
uploadSVG();