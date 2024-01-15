import { TYPOGRAPHY } from "@/constants/typography";

export default function ProductItem() {
  return (
    <div
      className={`${TYPOGRAPHY.NORMAL} p-[8px] border border-solid border-[#0000004D] flex gap-2 box-border rounded-[10px]`}
    >
      <div className="w-[62px] h-[62px] bg-argent shrink-0" />
      <div className="w-full flex flex-col justify-between">
        <div className="flex gap-2 align-center">
          <div className="pt-[2px]">A 벽지</div>
          <div
            className={`${TYPOGRAPHY.SMALL} bg-portlandOrange text-white rounded-[12px] p-[2px_8px_2px_8px] box-border text-[13px]`}
          >
            이벤트
          </div>
        </div>
        <div className="flex justify-between">
          <div>- 1 +</div>
          <div>100,000원</div>
        </div>
      </div>
    </div>
  );
}
