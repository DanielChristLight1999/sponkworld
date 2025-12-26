import { SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function SponkFooter() {
    return (
        <div className="p-10 bg-[#222222] gap-10 flex flex-col items-center gap-4">
            <Image src={"/images/sponk-text.png"} alt="Sponk Text" width={300} height={300} />
            <div className="flex text-white items-center gap-10">
                <SiX size={52} />
                <SiTelegram size={52} />
            </div>
            <div className="flex flex-col items-center gap-10">
                <Card className="bg-transparent max-w-2xl text-center text-white text-lg border border-[#555555] ">
                    <CardContent className="p-2">
                        SPONK is a meme coin with no intrinsic value or expectation of financial return.
                        There is no formal team or roadmap. The coin is for entertainment purposes only.
                    </CardContent>
                </Card>
                <p className="text-center text-white">
                    © Copyright 2021: Sponk World
                </p>
            </div>
        </div>
    )
}
