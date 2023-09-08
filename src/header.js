import "./styles/headerStyle.css";

const createHeader = () => {

    const header = document.createElement(`header`);
    const container = document.createElement(`div`);
    const sideBar = document.createElement(`div`);
    const title = document.createElement(`p`);

    const linkList = document.createElement(`ul`)

    const homePage = document.createElement(`li`)
    homePage.id = "home-link"
    const menu = document.createElement(`li`)
    menu.id = "menu-link"
    const ourMission = document.createElement(`li`)
    ourMission.id = "mission-link"
    const careers = document.createElement(`li`)
    careers.id = "careers-link"
    
    homePage.textContent = "rRetturn//Home"
    menu.textContent = "noTe(craving)ds";
    ourMission.textContent = "taskingTaskingKingstas";
    careers.textContent = "YOUMUSTJOINJOIN";

    container.classList.add(`container`);
    sideBar.classList.add(`side-bar`);
    linkList.classList.add(`links`);

    linkList.appendChild(homePage)
    linkList.appendChild(menu)
    linkList.appendChild(ourMission)
    linkList.appendChild(careers)

    title.textContent = "Le P*1*chet";

    sideBar.appendChild(linkList)
    container.appendChild(title);
    container.appendChild(sideBar);
    header.appendChild(container);

    return header;
};

export { createHeader }