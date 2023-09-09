import "./styles/careerStyle.css"
import eye from "./imgs/catseye_hubblepohl_1278.jpg"

const createCareer = () => {
    const content = document.createElement(`div`);
    content.classList.add(`content`);

    const link = document.createElement(`a`)
    const linkImg = new Image();
    linkImg.src = eye;
    link.appendChild(linkImg)
    content.appendChild(link)

    return content
};

export { createCareer }

/* https://www.nasa.gov/multimedia/imagegallery/image_feature_211.html */ 