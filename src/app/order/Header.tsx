import Image from "next/image";
import logo from "/public/logo-black.svg";

export default function Header() {
  return (
    <div className="w-full bg-black p-3 shadow-[0_4px_4px_0_#00000040]">
      <Image src={logo} alt="hero" width={94} height={32} priority />
    </div>
  );
}
