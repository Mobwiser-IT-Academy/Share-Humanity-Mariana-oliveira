import { htmlElements } from '../base/base';
import spriteSvg from '../../../assets/images/sprite.svg'

export function changeIcon(elem) {

	//checks which element called the functions and then which is the current icon used to change the other one
	
	console.log("ola ola")

	const navElement = elem.target.closest('.nav__toggle-button');
	const navBackElement = elem.target.closest('.nav__back-button');
	const searchElement = elem.target.closest('.search__toggle-button');

	if(navElement) {

		const navIcon = htmlElements.navIconContainer.children;
		console.log('antes de ver:');
		console.log(htmlElements.navIconContainer.innerHtml)
		if(navIcon.innerHtml ===`<use xlink:href="${spriteSvg}#icon-cross"></use>`) {		
			htmlElements.navIconContainer.innerHtml = `<use xlink:href="${spriteSvg}#icon-menu"></use>`;
			console.log('depois de ver 1:');
			console.log("entrei")
		} else {		
			htmlElements.navIconContainer.innerHtml = `<use xlink:href="${spriteSvg}#icon-cross"></use>`;
			console.log('depois de ver 2:');
			console.log(navIcon)
		}

	} else if(searchElement) {
		if(htmlElements.iconToggleSearch.getAttribute("xlink:href") ==="assets/images/sprite.svg#icon-cross") {		
			htmlElements.iconToggleSearch.setAttribute("xlink:href", "assets/images/sprite.svg#icon-search");
		} else {		
			htmlElements.iconToggleSearch.setAttribute("xlink:href", "assets/images/sprite.svg#icon-cross");
		}

	} else if(navBackElement) {
		htmlElements.iconToggleMenu.setAttribute("xlink:href", "assets/images/sprite.svg#icon-menu");
	}
}
