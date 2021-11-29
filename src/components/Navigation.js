import React from "react";
import Icon from "@mdi/react";
import { mdiInstagram, mdiFacebook } from "@mdi/js";

import "../styles/Navigation.css";

const Navigation = () => {
  const list = [
    { name: "O Nas", href: "#" },
    { name: "Oferta", href: "#offer" },
    { name: "Nasze realizacje", href: "#projects" },
    { name: "Organizer", href: "#organizer" },
    { name: "Kontakt", href: "#contact" },
  ];

  const menu = list.map((item) => (
    <li key={item.name}>
      <a href={item.href}>{item.name}</a>
    </li>
  ));
  return (
    <nav>
      <div className="nav-icons">
        <div className="ig">
          <a href="https://www.instagram.com/nice.flowers.kielce/">
            <Icon
              className="ig-icon"
              path={mdiInstagram}
              size={1.3}
              horizontal={false}
              vertical
              rotate={90}
            />
          </a>
        </div>
        <div className="fb">
          <a href="https://www.facebook.com/nice.flowers.kielce">
            <Icon
              className="fb-icon"
              path={mdiFacebook}
              size={1.3}
              horizontal
              vertical
              rotate={180}
            />
          </a>
        </div>
      </div>

      <div className="navigationList">
        <ul>{menu}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
