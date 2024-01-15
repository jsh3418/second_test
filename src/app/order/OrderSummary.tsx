"use client";

import { TYPOGRAPHY } from "@/constants/typography";
import OrderButton from "./OrderButton";
import { useCartStore } from "./useCartStore";

export default function OrderSummary() {
  const { cartItems } = useCartStore();

  const totalQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const orderButtonDisabled = totalQuantity === 0;

  return (
    <div className="w-full rounded-t-[20px] bg-white relative bottom-0 shadow-[0_-4px_10px_0_#00000040] p-[23px_27px_27px_27px]">
      <div className={`mb-[18px] text-right ${TYPOGRAPHY.NORMAL}`}>
        <div>{`총 수량 : ${totalQuantity}개`}</div>
        <div>{`총 가격 : ${totalPrice.toLocaleString("ko")}원`}</div>
      </div>

      <OrderButton disabled={orderButtonDisabled} />
    </div>
  );
}
