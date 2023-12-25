import { notFound } from "next/navigation";

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h2>
        Product details Id : {params.productId} and review id :{" "}
        {params.reviewId}
      </h2>
    </div>
  );
};

export default ReviewDetails;
