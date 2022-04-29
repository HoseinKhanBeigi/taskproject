import Head from "next/head";
import React from "react";

const SEO = (props) => {
  const { title, description } = props;
  return (
    <Head>
      <title>{title} | App</title>
      <meta name="description" content={description} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
    </Head>
  );
};

export default SEO;
