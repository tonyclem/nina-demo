import React from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>Single Product Page</h1>
      <p>Product id: {id}</p>
    </div>
  );
};

export default SingleProductPage;
