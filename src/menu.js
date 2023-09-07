import "./styles/menuStyle.css";

const createMenu = () => {
    const content = document.createElement(`div`);
    content.classList.add(`content`);

    const menuDesc = document.createElement(`div`);
    menuDesc.classList.add(`menu-description`);
    const descHead = document.createElement(`h3`);
    const descBod = document.createElement(`p`);
    descHead.textContent = `This is the Header`
    descBod.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione non voluptatibus harum corrupti sint, eius in doloribus accusamus sit expedita magnam beatae, ipsam voluptatum itaque dolore fugit fuga, eum sed!"
    menuDesc.appendChild(descHead)
    menuDesc.appendChild(descBod)

    
    const menuItem1 = document.createElement(`div`);
    menuItem1.classList.add(`menu-item`);
    menuItem1.id = `menu-item-1`;
    const menuModal1 = document.createElement(`div`)
    menuModal1.classList = `menu-image`
    menuModal1.id = `menu-img-1`
    menuItem1.appendChild(menuModal1)

    const menuItem2 = document.createElement(`div`);
    menuItem2.classList.add(`menu-item`);
    menuItem2.id = `menu-item-2`;
    const menuModal2 = document.createElement(`div`)
    menuModal2.classList = `menu-image`
    menuModal2.id = `menu-img-2`
    menuItem2.appendChild(menuModal2)

    const menuItem3 = document.createElement(`div`);
    menuItem3.classList.add(`menu-item`);
    menuItem3.id = `menu-item-3`;
    const menuModal3 = document.createElement(`div`)
    menuModal3.classList = `menu-image`
    menuModal3.id = `menu-img-3`
    menuItem3.appendChild(menuModal3)

    const menuItem4 = document.createElement(`div`);
    menuItem4.classList.add(`menu-item`);
    menuItem4.id = `menu-item-4`;
    const menuModal4 = document.createElement(`div`)
    menuModal4.classList = `menu-image`
    menuModal4.id = `menu-img-4`
    menuItem4.appendChild(menuModal4)

    const menuItem5 = document.createElement(`div`);
    menuItem5.classList.add(`menu-item`);
    menuItem5.id = `menu-item-5`;
    const menuModal5 = document.createElement(`div`)
    menuModal5.classList = `menu-image`
    menuModal5.id = `menu-img-5`
    menuItem5.appendChild(menuModal5)

    content.appendChild(menuDesc);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    content.appendChild(menuItem4);
    content.appendChild(menuItem5);

    return content;
};

export { createMenu };