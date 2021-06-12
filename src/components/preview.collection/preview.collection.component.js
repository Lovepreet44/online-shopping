import React, { useEffect } from "react";
import "./preview.collection.scss";
import CollectionItem from "../collection-item/collection.item.component";
const PreviewCollection = ({ title, items }) => {
  return (
    <>
      <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
          {items &&
            items
              .filter((item1, idx) => idx < 4)
              .map(({ id, ...allpreviewdata }) => (
                <CollectionItem key={id} {...allpreviewdata} />
              ))}
        </div>
      </div>
    </>
  );
};

export default PreviewCollection;
