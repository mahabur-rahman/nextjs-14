const ProductDetails = ({ params }: { params: { productId: string } }) => {
  console.log("param: ", params);
  return (
    <div>
      <h2>Product details page: {params.productId}</h2>
    </div>
  );
};

export default ProductDetails;
