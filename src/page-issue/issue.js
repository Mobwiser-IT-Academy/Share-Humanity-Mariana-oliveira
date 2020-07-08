import "../styles/main.scss";
import { htmlElements } from "../scripts/app/base/base";
import { changeLinkActive } from "../scripts/app/ui-interactions/change-link-active";
import { uploadSVG } from "../scripts/app/ui-interactions/upload-svg";
import { changeIcon } from '../scripts/app/ui-interactions/change-icon';
import { closeMenu } from '../scripts/app/ui-interactions/close-menu';



// Remove all active links on navigation bar
document.addEventListener("DOMContentLoaded", function(event) {
         //Remove class active from active link
         for(var i = 0; i < htmlElements.navLink.length; i++) {

            htmlElements.navLink[i].classList.remove("nav__link--active");			
        }
  });



  
//Inject all SVG files on DOM
uploadSVG();


// Closes nav menu 
htmlElements.navBackMenu.addEventListener('click', closeMenu)



// CHANGE ACTIVE NAV LINK
htmlElements.navItems.forEach(function(el) {
    el.addEventListener('click', function(elem) {changeLinkActive(elem)});	
});


// CHANGE ICON 
htmlElements.iconChange.forEach(function(el) {
    el.addEventListener('click', function(elem) {changeIcon(elem)});	
});


