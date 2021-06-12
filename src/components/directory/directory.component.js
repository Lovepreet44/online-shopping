import React, { useState } from "react";
import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";
const Directory = () => {
  const [section] = useState([
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "/contactus",
    },
    {
      id: 2,
      title: "jeckets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "/contact2",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "/contact3",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      linkUrl: "/contactus",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      linkUrl: "/contactus",
    },
  ]);
  return (
    <div className="directry-menu">
      {section.map(({ id, ...gettingdata }) => {
        return <MenuItem key={id} {...gettingdata} />;
      })}
    </div>
  );
};
export default Directory;
