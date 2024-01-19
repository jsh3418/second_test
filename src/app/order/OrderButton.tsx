import { PATH } from "@/constants/path";
import { getSuccessOrFailure } from "@/utils/getSuccessOrFailure";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "./useCartStore";

type Props = {
  disabled: boolean;
};

export default function OrderButton({ disabled }: Props) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const resetCart = useCartStore(({ resetCart }) => resetCart);

  const onSuccess = () => {
    resetCart();
    router.push(PATH.COMPLETE);
  };

  const onFailure = () => {
    router.push(PATH.ERROR);
  };

  const onOrderButtonClick = () => {
    if (disabled) return;

    setIsLoading(true);

    const result = getSuccessOrFailure();

    setTimeout(() => {
      if (result === "success") {
        onSuccess();
      } else {
        onFailure();
      }
    }, 2000);
  };

  const orderButtonDisabled = disabled || isLoading;

  return (
    <button
      className={`w-full h-[48px] text-white${
        orderButtonDisabled ? " bg-argent" : " bg-black"
      }`}
      disabled={orderButtonDisabled}
      onClick={onOrderButtonClick}
    >
      {isLoading ? "로딩중..." : "주문하기"}
    </button>
  );
}
