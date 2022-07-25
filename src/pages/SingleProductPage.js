import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  console.log(id);
  return <h1>Hello single page</h1>;
};

export default SingleProductPage;
