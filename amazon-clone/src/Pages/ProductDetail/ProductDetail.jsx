import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/product/ProductCard"

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(()=>{
        setLoading(false)
      });
  }, [productId]);

  if(loading) return <h3>Loading...</h3>
   if (!product) return <p>product not found...</p>;

  return (
    <LayOut>
      <ProductCard product={product} key={product.id} />
    </LayOut>
  );
};

export default ProductDetail;
