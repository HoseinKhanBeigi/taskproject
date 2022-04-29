import * as React from "react";
import ProductList from "../components/ProductList";
import { server } from "../config";
import { useLoader } from "../hooks/useLoader";

export default function Home({ products }) {
  const loading = useLoader();

  return loading ? (
    "loading.."
  ) : (
    <ProductList products={products} isLoading={loading} />
  );
}
export async function getStaticProps() {
  const res = await fetch(`${server}/api/products`);

  const products = await res.json();
  return {
    props: {
      products,
      revalidate: 60,
    },
  };
}
