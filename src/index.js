import "./style.css";

const createHeader = () => {

    const header = document.createElement(`header`);
    const title = document.createElement(`p`);
    const sideBar = document.createElement(`div`);

    sideBar.classList.add(`side-bar`);
    title.textContent = "Restaurant Title"

    header.appendChild(title)
    header.appendChild(sideBar)

    return header;
};

const createImageDiv = () => {
    const imgDiv = document.createElement(`div`);
    imgDiv.classList.add(`img-container`)

    return imgDiv
};

const createMain = () => {
    const main = document.createElement(`main`);

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

document.body.appendChild(createHeader());
document.body.appendChild(createImageDiv());
document.body.appendChild(createMain());
document.body.appendChild(createFooter());
