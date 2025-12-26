import AboutSponk from "@/components/Home/AboutSponk";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import SponkFooter from "@/components/Home/SponkFooter";
import SponkStats from "@/components/Home/SponkStats";
import WhoisSponk from "@/components/Home/WhoisSponk";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <Hero />
      <AboutSponk />
      <SponkStats />
      <WhoisSponk />
      <div className="w-full">
        <Image className="w-full" src={"/images/sponk-looking.gif"} alt="Sponk Looking" width={500} height={500} />
      </div>
      <SponkFooter />
    </div>
  );
}
