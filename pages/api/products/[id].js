export default async function handler({ query: { id } }, res) {
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await result.json();

  if (product) {
    res.status(200).json(product);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}
