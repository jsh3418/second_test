"use client";

import { PATH } from "@/constants/path";
import { TYPOGRAPHY } from "@/constants/typography";
import useDelayRedirect from "@/hooks/useDelayRedirect";
import Image from "next/image";
import checkIcon from "/public/checkFilled.svg";

export default function Complete() {
  const remainingTime = useDelayRedirect(PATH.HOME, 3000);

  return (
    <div
      className={`${TYPOGRAPHY.NORMAL} text-center w-full h-full flex flex-col items-center justify-center gap-[12px]`}
    >
      <Image src={checkIcon} alt="check" width={48} height={48} priority />
      <div>주문이 완료되었습니다.</div>
      <div>{`${remainingTime}초 후 홈으로 이동합니다.`}</div>
    </div>
  );
}
