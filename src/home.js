import "./style.css";
import banner from "./imgs/rest_banner.jpg"

const createHeader = () => {

    const header = document.createElement(`header`);
    const container = document.createElement(`div`);
    const title = document.createElement(`p`);
    const sideBar = document.createElement(`div`);
    const linkList = document.createElement(`ul`)

    const homePage = document.createElement(`li`)
    const menu = document.createElement(`li`)
    const ourMission = document.createElement(`li`)
    const careers = document.createElement(`li`)
    
    homePage.textContent = "Home"
    menu.textContent = "Menu";
    ourMission.textContent = "Mission";
    careers.textContent = "Careers";

    homePage.addEventListener(`click`, () => {
        
    })

    container.classList.add(`container`);
    sideBar.classList.add(`side-bar`);
    linkList.classList.add(`links`);

    linkList.appendChild(homePage)
    linkList.appendChild(menu)
    linkList.appendChild(ourMission)
    linkList.appendChild(careers)

    title.textContent = "Le Pichet";

    sideBar.appendChild(linkList)
    container.appendChild(title);
    container.appendChild(sideBar);
    header.appendChild(container);

    return header;
};

const createImageDiv = () => {
    const imgDiv = document.createElement(`div`);
    imgDiv.classList.add(`img-container`)
    
    const restBanner = new Image();
    restBanner.src = banner;

    imgDiv.appendChild(restBanner)

    return imgDiv
};

const createMain = () => {
    const main = document.createElement(`main`);
    const aboutUsHead = document.createElement(`h1`)
    const aboutUsBody = document.createElement(`p`)

    aboutUsHead.textContent = "About Us"
    aboutUsBody.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione non voluptatibus harum corrupti sint, eius in doloribus accusamus sit expedita magnam beatae, ipsam voluptatum itaque dolore fugit fuga, eum sed!"

    main.appendChild(aboutUsHead)
    main.appendChild(aboutUsBody)

    return main
};

const createFooter = () => {
    const footer = document.createElement(`footer`);
    const orderButton = document.createElement(`button`)
    const reserveButton = document.createElement(`button`)

    orderButton.textContent = `Order`
    reserveButton.textContent = `Reserve`

    footer.appendChild(orderButton)
    footer.appendChild(reserveButton)

    return footer

};

const buildHomePage = () => {
    document.body.appendChild(createHeader());
    document.body.appendChild(createImageDiv());
    document.body.appendChild(createMain());
    document.body.appendChild(createFooter());
};

export {buildHomePage}
