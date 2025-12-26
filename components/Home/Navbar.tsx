import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative bg-[#590740]">
        <div className="flex items-center fixed top-0 left-0 right-0 z-50  bg-[#590740] px-6 py-4 gap-4">
            <Image src={"/images/web-logo.png"} alt="Sponk World Logo" width={90} height={100} />
            <Image src={"/images/sponk-text.png"} alt="Sponk World Logo" width={90} height={100} />
        </div>
    </div>
  )
}
