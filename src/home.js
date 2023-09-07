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
    aboutUsHead.textContent = "About Us"
    aboutUsBody.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione non voluptatibus harum corrupti sint, eius in doloribus accusamus sit expedita magnam beatae, ipsam voluptatum itaque dolore fugit fuga, eum sed!"
    main.appendChild(aboutUsHead)
    main.appendChild(aboutUsBody)

    content.appendChild(main)

    const footer = document.createElement(`footer`);
    const orderButton = document.createElement(`button`)
    const reserveButton = document.createElement(`button`)
    orderButton.textContent = `Order`
    reserveButton.textContent = `Reserve`
    footer.appendChild(orderButton)
    footer.appendChild(reserveButton)

    content.appendChild(footer)

    return content
};

export { createHomePage }
