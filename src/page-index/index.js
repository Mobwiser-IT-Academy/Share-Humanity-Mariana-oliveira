import "../styles/main.scss";
import { htmlElements } from "../scripts/app/base/base";
import { changeLinkActive } from "../scripts/app/ui-interactions/change-link-active";
import { uploadSVG } from "../scripts/app/ui-interactions/upload-svg";
import { changeIcon } from '../scripts/app/ui-interactions/change-icon';
import { closeMenu } from '../scripts/app/ui-interactions/close-menu';
import  * as listIssues from '../scripts/app/views/listIssuesView'


//Inject all SVG files on DOM
uploadSVG();






// 
const controlIssue = () => {
    // 1. Prepare the UI 
    listIssues.clearList();

    // 2. Get Results


    // 3. Render Results 
};





// EVENTS 
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
