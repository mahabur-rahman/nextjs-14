interface Params {
    productId: string;
    reviewId: string;
}

interface ReviewDetailsProps {
    params: Params;
}

export default function ReviewDetails({ params }: ReviewDetailsProps) {
    const { productId, reviewId } = params; 


    return (
        <div>
            <h2>Review Details</h2>
            <p>Product ID: {productId}</p>
            <p>Review ID: {reviewId}</p>
        </div>
    );
}
