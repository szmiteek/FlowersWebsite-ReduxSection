import React from "react";

import "../../styles/Offer.css";

const Offer = () => {
  return (
    <section id="offer" className="offer-section">
      <div className="offer-container">
        <div data-aos="fade-right" data-aos-once="true" data-aos-delay="400">
          <div className="offer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              necessitatibus! Mollitia voluptate quas excepturi alias, ipsa
              repudiandae quos nihil cupiditate reiciendis odio impedit
              doloribus quasi ipsam vero harum ab deleniti.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-once="true" data-aos-delay="700">
          <div className="offer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              necessitatibus harum beatae sapiente, vitae distinctio? Vel, natus
              placeat. Maiores architecto perferendis eveniet quis soluta
              repellendus culpa exercitationem alias recusandae modi?
            </p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-once="true" data-aos-delay="1000">
          <div className="offer">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              laborum harum nam nulla quam reiciendis nihil eos excepturi non
              officia, velit neque earum iure nemo eaque quibusdam temporibus
              similique placeat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
