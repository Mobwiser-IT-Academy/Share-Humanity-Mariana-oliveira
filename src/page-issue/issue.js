import "../styles/main.scss";
import { htmlElements } from "../scripts/app/base/base";
import { uploadSVG } from "../scripts/app/ui-interactions/upload-svg";


// Remove all active links on navigation bar
document.addEventListener("DOMContentLoaded", function(event) {
         //Remove class active from active link
         for(var i = 0; i < htmlElements.navLink.length; i++) {

            htmlElements.navLink[i].classList.remove("nav__link--active");			
        }
  });



  
//Inject all SVG files on DOM
uploadSVG();