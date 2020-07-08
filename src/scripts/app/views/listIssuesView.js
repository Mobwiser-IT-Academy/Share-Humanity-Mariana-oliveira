import { htmlElements } from '../base/base';


// Render to the UI one issue at a time
export const renderListIssues = issues => {
    const markup = `
    <div class="issue">
        <h3 class="heading-3">${issues.title}</h3>
        <img src="${issues.img}" alt="${issues.imgAlt}" class="issue__img} ">
        <div class="issue__info">
            <p class="issue__people">People Affected: <span class="issue__people-affected">${issues.peopleAffected}</span></p>
            <p class="issue__priority">Priority Rank: <span class="issue__priority-rank">${issues.priorityRank}</span></p>
            <a href="${issues.link}" class="btn btn--small">See More</a>
        </div>
    </div>`

    htmlElements.issuesList.insertAdjacentElement("beforeend", markup);

};


// Clear list of issues from UI
export const clearList = () => {
    htmlElements.issuesList.innerHTML = "";
};