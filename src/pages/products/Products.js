import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.scss";
import { api } from "../../utils/axios";

function Products() {
  const [category, setCategory] = useState("electronics");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const res = await api.get(`products/category/${category}`);
        setProducts(res?.data);
      })();
    } catch (error) {
      navigate("/404");
      console.log(error);
    }
  }, [category, navigate]);

  return (
    <div className="products">
      <div className="products__content">
        <div className="products__categories">
          <ul>
            <li
              onClick={() => {
                setCategory("electronics");
              }}
            >
              Electronics
            </li>
          </ul>
          <ul>
            <li
              onClick={() => {
                setCategory("jewelery");
              }}
            >
              Jewellery
            </li>
          </ul>
          <ul>
            <li
              onClick={() => {
                setCategory("mensclothing");
              }}
            >
              MensClothing
            </li>
          </ul>
          <ul>
            <li
              onClick={() => {
                setCategory("womensclothing");
              }}
            >
              WomenClothing
            </li>
          </ul>
        </div>

        <div className="products__titles">
          {products?.length === 0 ? (
            <h1>Loading....</h1>
          ) : (
            <ul>
              {products?.map((item) => {
                return (
                  <li
                    key={item.title}
                    onClick={() => {
                      navigate(`/products/${item._id}`);
                    }}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default Products;
