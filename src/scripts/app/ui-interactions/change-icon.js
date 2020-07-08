import { htmlElements } from '../base/base';
import spriteSvg from '../../../assets/images/sprite.svg'

export function changeIcon(elem) {

	//checks which element called the functions and then which is the current icon used to change the other one
	
	const navElement = elem.target.closest('.nav__toggle-button');
	const searchElement = elem.target.closest('.search__toggle-button');

	if(navElement) {

		if(htmlElements.toggleMenu.checked === true) {		
			htmlElements.navIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-menu"></use>`;
		} else {		
			htmlElements.navIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-cross"></use>`;
		}

	} else if(searchElement) {
		if(htmlElements.searchToggle.checked === true) {		

			htmlElements.searchToggleIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-search"></use>`;
		} else {		
			htmlElements.searchToggleIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-cross"></use>`;
		}

	} 
}
