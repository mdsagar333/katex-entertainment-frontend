import React from "react";

const FooterVerticalNav = ({ navHeader, navLists }) => {
  return (
    <div>
      <h5>{navHeader}</h5>
      <ul class="nav flex-column">
        {navLists.map((item, index) => {
          return (
            <li class="nav-item" key={index}>
              <a class="nav-link active" aria-current="page" href="#">
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
