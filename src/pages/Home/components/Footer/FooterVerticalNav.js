import React from "react";

const FooterVerticalNav = ({ navHeader, navLists }) => {
  return (
    <div>
      <h6 className="ps-3">{navHeader}</h6>
      <ul className="nav flex-column p-0">
        {navLists.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <a
                className="nav-link active custom__footer__link"
                aria-current="page"
                href="#"
              >
                {item.navText}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterVerticalNav;
