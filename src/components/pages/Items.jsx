import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Items = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)
  return (
    <>
      <div>Items = {category}</div>
      <h1>Price:</h1>
      <div>QueryString = {searchParams.get('price')}</div>
    </>
  );
};

export default Items;
