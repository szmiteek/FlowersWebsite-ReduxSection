import React from "react";
import { Carousel } from "react-bootstrap/";
import "../../styles/Projects.css";

import img2 from "../../images/2.png";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Nasze realizacje</h1>
      <div>
        <Carousel className="carousel">
          <Carousel.Item className="carouselItems">
            <img className="d-block w-100" src={img2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item className="carouselItems">
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item className="carouselItems">
            <img className="d-block w-100" src={img2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
export default Projects;
