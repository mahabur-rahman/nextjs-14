

const ProductDetails = ({params}: {
    params: {
        productId: string
    }
}) => {
  return (
    <div>
      product Details : {params.productId}
    </div>
  )
}

export default ProductDetails
