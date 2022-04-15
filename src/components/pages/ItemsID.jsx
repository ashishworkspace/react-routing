import React from "react";
import { useParams } from "react-router-dom";

const ItemsID = () => {
  const { category, id } = useParams();
  return (
    <>
      <div>Items = {category}</div>
      <div>ItemsID = {id}</div>
    </>
  );
};

export default ItemsID;
