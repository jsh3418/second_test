import OrderButton from "./OrderButton";

export default function OrderSummary() {
  return (
    <div className="w-full rounded-t-[20px] bg-white absolute bottom-0 shadow-[0_-4px_10px_0_#00000040] p-[23px_27px_27px_27px]">
      <div className="mb-[18px] font-inter text-[18px] font-normal leading-[22px] text-right tracking-normal">
        <div>총 수량 : 0원</div>
        <div>총 가격 : 0원</div>
      </div>

      <OrderButton disabled={false} isLoading={false} />
    </div>
  );
}
