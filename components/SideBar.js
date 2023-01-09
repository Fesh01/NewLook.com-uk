import React, { useState } from "react";


import {
//   FaTh,
  FaUserAlt,
//   FaRegChartBar,
  FaCommentAlt,
//   FaShoppingBag,
  FaThList,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ Children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    // {
    //   path: "/Dashboard",
    //   name: "Dasboard",
    //   icon: <FaTh />,
    // },

    {
      path: "/AllUser",
      name: "AllUser",
      icon: <FaUserAlt />,
    },

    // {
    //   path: "/Users",
    //   name: "Users",
    //   icon: <FaRegChartBar />,
    // },

    {
      path: "/CreateUsers",
      name: "CreateUsers",
      icon: <FaCommentAlt />,
    },

    // {
    //   path: "/Product",
    //   name: "Product",
    //   icon: <FaShoppingBag />,
    // },

    {
      path: "/AllProduct",
      name: "AllProduct",
      icon: <FaThList />,
    },

    {
      path: "/CreateProduct",
      name: "CreateProduct",
      icon: <FaThList />,
    },
  ];
  return (
    <div
      style={{ width: isOpen ? "250px" : "50px" }}
      className="sidebar_container"
    >
      <div className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Admin
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="sidebar_icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>
        {Children}
        <div className="admin_text">
          <p>
            Welcome to my Admin Home page.. Use the Sidebar to navigate your
            through the Admin page
          </p>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
