import "./styles/homeStyle.css";
import banner from "./imgs/rest_banner.jpg"

const createHomePage = () => {
    const content = document.createElement(`div`)
    content.classList.add(`content`)

    const imgDiv = document.createElement(`div`);
    imgDiv.classList.add(`img-container`)
    const restBanner = new Image();
    restBanner.src = banner;
    imgDiv.appendChild(restBanner)

    content.appendChild(imgDiv)

    const main = document.createElement(`main`);
    const aboutUsHead = document.createElement(`h1`)
    const aboutUsBody = document.createElement(`p`)
    aboutUsHead.textContent = "WEdON0TKNOWY0u"
    aboutUsBody.textContent = "YouAre(welcome)notTOhere come come come DRr11Nk. Sl0wTired??1? REVOLUTION REVOLUTION! kneeeL on // BARRIC4DE // "
    main.appendChild(aboutUsHead)
    main.appendChild(aboutUsBody)

    content.appendChild(main)

    const footer = document.createElement(`footer`);
    const orderButton = document.createElement(`button`)
    const reserveButton = document.createElement(`button`)
    orderButton.textContent = `WE COME`
    reserveButton.textContent = `TO YOU`
    footer.appendChild(orderButton)
    footer.appendChild(reserveButton)

    content.appendChild(footer)

    return content
};

export { createHomePage }
