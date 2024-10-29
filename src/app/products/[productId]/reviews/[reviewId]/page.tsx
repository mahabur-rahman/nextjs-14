import { notFound } from "next/navigation";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ProductDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error(`Error has occurred`);
  }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
