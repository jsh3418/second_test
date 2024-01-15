import { PATH } from "@/constants/path";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  disabled: boolean;
};

export default function OrderButton({ disabled }: Props) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const fakeOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (Math.random() > 0.5) {
        router.push(PATH.COMPLETE);
      } else {
        router.push(PATH.ERROR);
      }
    }, 2000);
  };

  return (
    <button
      className={`w-full h-[48px] text-white${
        disabled || isLoading ? " bg-argent" : " bg-black"
      }`}
      disabled={disabled || isLoading}
      onClick={fakeOrder}
    >
      {isLoading ? "로딩중..." : "주문하기"}
    </button>
  );
}
