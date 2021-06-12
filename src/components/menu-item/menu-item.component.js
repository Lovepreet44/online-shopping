import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
  params,
}) => {
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content" onClick={() => history.push(`${linkUrl}`)}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">click here for more</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
