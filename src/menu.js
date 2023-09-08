import "./styles/menuStyle.css";

const createMenu = () => {
    const content = document.createElement(`div`);
    content.classList.add(`content`);

    const menuDesc = document.createElement(`div`);
    menuDesc.classList.add(`menu-description`);
    const descHead = document.createElement(`h3`);
    const descBod = document.createElement(`p`);
    descHead.textContent = `This is the Header`
    descBod.textContent = "PLUNGEE into CHaOS// wIth EYES WIDE// mYsTery dEEp // a cuLiNARY gAunTLET."
    menuDesc.appendChild(descHead)
    menuDesc.appendChild(descBod)

    
    const menuItem1 = document.createElement(`div`);
    menuItem1.classList.add(`menu-item`);
    menuItem1.id = `menu-item-1`;
    const menuModal1 = document.createElement(`div`);
    menuModal1.classList = `menu-image`;
    menuModal1.id = `menu-img-1`;
    menuItem1.appendChild(menuModal1);
    const menItemDes1 = document.createElement(`p`);
    menItemDes1.classList.add(`menu-item-description`);
    menItemDes1.textContent = `....AbstrakTo CrOOiSsant
    flakii, like fallen starrss - buttered whispers,
    ShHhS- served with--liquid night, "french'nexTension" ??~`;
    menuItem1.appendChild(menItemDes1);

    const menuItem2 = document.createElement(`div`);
    menuItem2.classList.add(`menu-item`);
    menuItem2.id = `menu-item-2`;
    const menuModal2 = document.createElement(`div`);
    menuModal2.classList = `menu-image`;
    menuModal2.id = `menu-img-2`;
    menuItem2.appendChild(menuModal2);
    const menItemDes2 = document.createElement(`p`);
    menItemDes2.classList.add(`menu-item-description`);
    menItemDes2.textContent = `!!Enigma Crepe
    thin veilz fold 2 obsKUrE Truthz,
    WhiSPERs of smoked dreams or berry enchantments...`;
    menuItem2.appendChild(menItemDes2);

    const menuItem3 = document.createElement(`div`);
    menuItem3.classList.add(`menu-item`);
    menuItem3.id = `menu-item-3`;
    const menuModal3 = document.createElement(`div`);
    menuModal3.classList = `menu-image`;
    menuModal3.id = `menu-img-3`;
    menuItem3.appendChild(menuModal3);
    const menItemDes3 = document.createElement(`p`);
    menItemDes3.classList.add(`menu-item-description`);
    menItemDes3.textContent = `++UmbraSouflee++
    rising wraith from DEpths,
    ChEEseSzZz blendZ with~ ChantEd HerBS,
    CoNSuME FORbiddEn VoisiONS strange confectiOns....???`;
    menuItem3.appendChild(menItemDes3);
    

    const menuItem4 = document.createElement(`div`);
    menuItem4.classList.add(`menu-item`);
    menuItem4.id = `menu-item-4`;
    const menuModal4 = document.createElement(`div`);
    menuModal4.classList = `menu-image`;
    menuModal4.id = `menu-img-4`;
    menuItem4.appendChild(menuModal4);
    const menItemDes4 = document.createElement(`p`);
    menItemDes4.classList.add(`menu-item-description`);
    menItemDes4.textContent = `....AbstrakTo CrOOiSsant
    flakii, like fallen starrss - buttered whispers,
    ShHhS- served with--liquid night, "french'nexTension" ??~`;
    menuItem4.appendChild(menItemDes4);

    const menuItem5 = document.createElement(`div`);
    menuItem5.classList.add(`menu-item`);
    menuItem5.id = `menu-item-5`;
    const menuModal5 = document.createElement(`div`);
    menuModal5.classList = `menu-image`;
    menuModal5.id = `menu-img-5`;
    menuItem5.appendChild(menuModal5);
    const menItemDes5 = document.createElement(`p`);
    menItemDes5.classList.add(`menu-item-description`);
    menItemDes5.textContent = `???ParanOid Nectar
    cryptic & DarKly BREWED,
    Unearthly-SPiCeS, hints of anOmaLoUS biTTerness,
    sIP sLoWLY, see INSIDe?????????`;
    menuItem5.appendChild(menItemDes5);

    content.appendChild(menuDesc);
    content.appendChild(menuItem1);
    content.appendChild(menuItem2);
    content.appendChild(menuItem3);
    content.appendChild(menuItem4);
    content.appendChild(menuItem5);

    return content;
};

export { createMenu };

/*     

    ....AbstrakTo CrOOiSsant
    flakii, like fallen starrss - buttered whispers,
    ShHhS- served with--liquid night, "french'nexTension" ??~

    

    

    

    



*/