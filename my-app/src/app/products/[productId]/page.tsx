const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h2>Product details page: {params.productId}</h2>
    </div>
  );
};

export default ProductDetails;
