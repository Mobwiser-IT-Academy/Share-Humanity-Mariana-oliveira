export function changeIcon(elem) {

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
