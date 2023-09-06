const createMenu = () => {
    const container = document.createElement(`div`);
    container.classList.add(`menu-item`);
    container.textContent = `This is the Menu`;

    return container
};

export { createMenu }