"use client";

import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Place order");

    router.push("/");
  };

  return (
    <div>
      <h2>Order Product</h2>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default OrderProduct;
