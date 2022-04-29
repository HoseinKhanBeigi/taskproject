import React from "react";
import { server } from "../../../config";
import { useLoader } from "../../../hooks/useLoader";
import ProductList from "../../../components/ProductItem";
import Seo from "../../../components/Seo";

const product = ({ product }) => {
  const loading = useLoader();
  return loading ? (
    "loading..."
  ) : (
    <>
      <Seo title={product.title} description={product.excerpt} />
      <ProductList product={product} />
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`${server}/api/products/${context.params.id}`);
  const product = await res.json();
  return { props: { product } };
}

export async function getStaticPaths(context) {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();
  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export default product;
