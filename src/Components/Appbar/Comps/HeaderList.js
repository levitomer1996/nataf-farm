import { Typography } from "@mui/material";
import React from "react";
import "../header.css";
const HeaderList = () => {
  const list = [
    { title: "רכיבה טיפולית", link: "therapy" },
    { title: "עלינו", link: "about" },
  ];
  return (
    <div className="header_list">
      {list.map(({ title, link }) => {
        return (
          <div className="header_list_item_div" key={title}>
            <a className="header_list_item" href={link}>
              {title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default HeaderList;
