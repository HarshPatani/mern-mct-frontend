import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/axios";

import "./ProductDetails.scss";
const ProductDetails = () => {
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    try {
      (async () => {
        const res = await api.get(`products/id/${id}`);
        setProduct(res?.data);
        console.log(res.data);
      })();
    } catch (error) {
      navigate("/404");
      console.log(error);
    }
  }, [id, navigate]);

  return (
    <div className="productDetails">
      {product !== null ? (
        <div className="productDetails__card">
          <div className="productDetails__card__header">
            {product?.category} Category
          </div>
          <div className="productDetails__card__content">
            <div className="productDetails__left">
              <div className="productDetails__left__img">
                <img loading="lazy" src={product?.image} alt="Product Poster" />
              </div>
            </div>
            <div className="productDetails__right">
              <h3>Product Name</h3>
              <p>{product?.title}</p>
              <h3>Product Price</h3>
              <p>$ {product?.price}</p>
              <h3>Product Description</h3>
              <p>{product?.description}</p>
              <h3>Product Rating</h3>
              <p>{product?.rating.rate}</p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductDetails;
