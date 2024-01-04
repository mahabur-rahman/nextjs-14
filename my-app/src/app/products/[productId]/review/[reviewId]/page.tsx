import { notFound } from "next/navigation";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error happening ...");
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
