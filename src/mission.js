import "./styles/missionStyle.css"

const createMission = () => {
    const content = document.createElement(`div`);
    content.classList.add(`content`);

    content.textContent = `Test`;

    const missionStatementHead = document.createElement(`h3`);
    missionStatementHead.classList.add(`mission-head`);
    missionStatementHead.textContent = `/O/ur Purp0se//|//`

    return content
};

export { createMission }