import { useContext, useState } from "react";

import { ProductsContext } from "../../contexts/products.context";
// import PRODUCTS from '../shop-data.json';
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const [data, setData] = useState([]);
  const { title } = useParams();
  const filterItem = (title) => {
    console.log(title);
    const res = products.filter((e) => {
      return title === e.category;
    });
    setData(res);
  };
  useEffect(() => {
    title ? filterItem(title) : setData(products);
  }, []);
  console.log(data);
  return (
    <div className="products-container">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
