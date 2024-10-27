const ProductDetails = ({ params: { productId } }: { params: { productId: string } }) => {
  return (
    <div>
      Product Details: {productId}
    </div>
  );
};

export default ProductDetails;
