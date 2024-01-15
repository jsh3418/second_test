import { TYPOGRAPHY } from "@/constants/typography";
import OrderButton from "./OrderButton";

export default function OrderSummary() {
  return (
    <div className="w-full rounded-t-[20px] bg-white relative bottom-0 shadow-[0_-4px_10px_0_#00000040] p-[23px_27px_27px_27px]">
      <div className={`mb-[18px] text-right ${TYPOGRAPHY.NORMAL}`}>
        <div>총 수량 : 0원</div>
        <div>총 가격 : 0원</div>
      </div>

      <OrderButton disabled={false} isLoading={false} />
    </div>
  );
}
