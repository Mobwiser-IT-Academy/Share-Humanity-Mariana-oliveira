import { htmlElements } from '../base/base';
import logoHeader from '../../../assets/images/logo.svg';
import footerHeader from '../../../assets/images/logo-white.svg';
import spriteSvg from '../../../assets/images/sprite.svg'



// Function to upload to the DOM all svg files
export function uploadSVG() {
    //Logo SVG
    htmlElements.headerLogo.src = `${logoHeader}`;
    htmlElements.footerLogo.src = `${footerHeader}`;

    //Icons from sprite file
    htmlElements.navIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-menu"></use>`;
    htmlElements.searchIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-search"></use>`;
    htmlElements.searchToggleIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-search"></use>`;
    htmlElements.facebookIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-facebook2"></use>`;
    htmlElements.instagramIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-instagram"></use>`;
    htmlElements.twitterIconContainer.innerHTML = `<use xlink:href="${spriteSvg}#icon-twitter"></use>`;
}