import Link from "next/link";

const Products = () => {
  const productId = 100;
  return (
    <div>
      <h2>Products page</h2>
      <Link href="/">Home</Link>

      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
      <Link href={`/products/${productId}`}>Product {productId}</Link>
    </div>
  );
};

export default Products;
