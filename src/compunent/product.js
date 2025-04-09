import React, { useContext } from 'react';
import { ShopContext } from './context/shopcontext';
import { useParams } from 'react-router-dom';
import ProductDisplay from './productDisplay/ProductDisplay';
import Breadcrums from './breadcrums/breadcrums';
import RelatedProduct from './RelatedProducts/RelatedProduct';

export default function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  console.log(useParams())
  console.log("Product ID:", productId);
  console.log("All Products:", all_product);

  // Log each product for inspection
  all_product.forEach((product, index) => {
    console.log(`Product ${index + 1}:`, product);
  });

  // Find the product
  const product = all_product.find((e) => e.id === Number(productId));
  if (product) {
    console.log("Found Product:", product);
  } else {
    console.log("Product not found for ID:", productId);
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay  product ={product} />
      <RelatedProduct />
    </div>
  );
}
