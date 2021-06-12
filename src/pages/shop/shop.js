import React, { useState } from "react";
import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../components/preview.collection/preview.collection.component";
const Shop_page = () => {
  const [collection] = useState(SHOP_DATA);
  return (
    <>
      {collection.map(({ id, ...allpreviewdata }) => (
        <PreviewCollection key={id} {...allpreviewdata} />
      ))}
    </>
  );
};
export default Shop_page;
