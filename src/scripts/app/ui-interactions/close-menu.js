import { htmlElements } from '../base/base';
import spriteSvg from '../../../assets/images/sprite.svg'

export function closeMenu() {

    // Close Nav Menu
    htmlElements.toggleMenu.checked = false;    
    
    //Update Menu Icon
    htmlElements.navIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-menu"></use>`;
}