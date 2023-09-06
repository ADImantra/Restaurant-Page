import { createHomePage } from "./home.js";
import { createHeader } from "./header.js";
import { createMenu } from "./menu.js";

document.body.appendChild(createHeader())

const bod = document.querySelector(`body`)

const homeButton = document.querySelector(`#home-link`)
const menuButton = document.querySelector(`#menu-link`)
const missionButton = document.querySelector(`#mission-link`)
const careersButton = document.querySelector(`#careers-link`)


homeButton.addEventListener(`click`, () => {
    clearForm();
    document.body.appendChild(createHeader());
    document.body.appendChild(buildHomePage());
})

menuButton.addEventListener(`click`, () => {
    console.log(`clicked`)
})

missionButton.addEventListener(`click`, () => {
    console.log(`clicked`)
})

careersButton.addEventListener(`click`, () => {
    console.log(`clicked`)
})

const clearForm = () => {
    bod.innerHTML = ``
};

document.body.appendChild(createHomePage());

