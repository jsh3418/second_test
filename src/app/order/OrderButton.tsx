type Props = {
  disabled: boolean;
  isLoading: boolean;
};

export default function OrderButton({ disabled, isLoading }: Props) {
  return (
    <button
      className={`w-full h-[48px] text-white${
        disabled ? " bg-argent" : " bg-black"
      }`}
      disabled={disabled}
    >
      {isLoading ? "로딩중..." : "주문하기"}
    </button>
  );
}
