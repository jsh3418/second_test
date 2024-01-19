"use client";

import { PATH } from "@/constants/path";
import { TYPOGRAPHY } from "@/constants/typography";
import useDelayRedirect from "@/hooks/useDelayRedirect";

export default function Complete() {
  const remainingTime = useDelayRedirect(PATH.HOME, 3000);

  return (
    <div
      className={`${TYPOGRAPHY.NORMAL} text-center w-full h-full flex flex-col items-center justify-center`}
    >
      <div>주문에 실패하였습니다.</div>
      <div>다시 시도해주세요.</div>
      <div>{`${remainingTime}초 후 홈으로 이동합니다.`}</div>
    </div>
  );
}
