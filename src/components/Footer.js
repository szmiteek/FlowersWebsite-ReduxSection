import React from "react";
import "../styles/Footer.css";
import Icon from "@mdi/react";
import { mdiInstagram, mdiFacebook, mdiPhone, mdiGmail } from "@mdi/js";

const Footer = () => {
  return (
    <footer id="contact">
      <h1>Skontaktuj się z nami</h1>
      <div className="contact">
        <div className="ig">
          <a href="https://www.instagram.com/nice.flowers.kielce/">
            <Icon
              className="ig-icon"
              path={mdiInstagram}
              size={1.5}
              horizontal={false}
              vertical
              rotate={90}
            />
          </a>
          <div>
            <a href="https://www.instagram.com/nice.flowers.kielce/">
              @Nice.Flowers.Kielce
            </a>
          </div>
        </div>

        <div className="fb">
          <a href="https://www.facebook.com/nice.flowers.kielce">
            <Icon
              className="fb-icon"
              path={mdiFacebook}
              size={1.5}
              horizontal
              vertical
              rotate={180}
            />
          </a>
          <div>
            <a href="https://www.instagram.com/nice.flowers.kielce/">
              Nice.Flowers.Kielce
            </a>
          </div>
        </div>
        <div className="phone">
          <Icon
            className="phone-icon"
            path={mdiPhone}
            size={1.5}
            horizontal={false}
            vertical
            rotate={90}
          />
          <p>508-488-388</p>
        </div>
        <div className="mail">
          <a href="https://www.gmail.com">
            <Icon
              className="mail-icon"
              path={mdiGmail}
              size={1.5}
              horizontal={false}
              vertical
              rotate={180}
            />
          </a>
          <div>
            <a href="https://www.gmail.com">Nice.Flowers@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
