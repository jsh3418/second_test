import { PATH } from "@/constants/path";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo-black.svg";

export default function Home() {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center gap-[41px]">
      <Image src={logo} alt="hero" width={150} height={51} />
      <Link
        className="w-[172px] h-[88px] bg-white flex items-center justify-center rounded-[20px] text-[25px] font-normal leading-[30px] text-center hover:opacity-90 active:opacity-80"
        href={PATH.ORDER}
      >
        주문하러 가기
      </Link>
    </div>
  );
}
