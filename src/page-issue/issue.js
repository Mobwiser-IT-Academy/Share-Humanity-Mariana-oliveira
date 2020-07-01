import "../styles/main.scss";
import "../assets/images/sprite.svg";
import { htmlElements } from "../scripts/app/base/base";


document.addEventListener("DOMContentLoaded", function(event) {
         //Remove class active from active link
         for(var i = 0; i < htmlElements.navLink.length; i++) {

            htmlElements.navLink[i].classList.remove("nav__link--active");			
        }
  });