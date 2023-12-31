import { createHomePage } from "./home.js";
import { createHeader } from "./header.js";
import { createMenu } from "./menu.js";
import { createMission } from "./mission.js";
import { createCareer } from "./career.js";

const firstLoad = () => {
    document.body.appendChild(createHeader());
    document.body.appendChild(createHomePage());
}

const clearForm = () => {
    const bod = document.querySelectorAll(`body`)[0];
    while (bod.children.length > 2) {
        bod.children[2].remove()
    }
};

firstLoad();

const homeButton = document.querySelector(`#home-link`);
const menuButton = document.querySelector(`#menu-link`);
const missionButton = document.querySelector(`#mission-link`);
const careersButton = document.querySelector(`#careers-link`);


homeButton.addEventListener(`click`, () => {
    clearForm();
    document.body.appendChild(createHomePage());
})


menuButton.addEventListener(`click`, () => {
    clearForm();
    document.body.appendChild(createMenu());

})

missionButton.addEventListener(`click`, () => {
    clearForm();
    document.body.appendChild(createMission());

})

careersButton.addEventListener(`click`, () => {
    clearForm();
    document.body.appendChild(createCareer());

})





