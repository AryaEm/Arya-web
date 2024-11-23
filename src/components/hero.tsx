import Image from "next/image";
import podium from "@/assets/3d podium.svg"

export default function Hero() {
    return (
        <>
            <div className="h-dvh w-full absolute -z-[1] bg-black">
                <Image src={podium} alt="3d podium bg" className="h-full w-full object-cover" />
            </div>

            <div className="w-full h-dvh flex overflow-hidden">
                <div className="h-full w-1/2 text-white flex justify-center overflow-hidden">
                    <div className="absolute bottom-16 overflow-hidden box-border header-text">
                        <h2 className="font-semibold py-5 px-24 overflow-hidden davey tracking-wide text-[10.5rem]">Arya</h2>
                    </div>
                    <div className="kotak absolute -z-[1] bottom-16 w-[420px] h-64 bg-zinc-400 bg-opacity-10 backdrop-blur-sm"></div>
                </div>

                <div className="h-full w-1/2"></div>
            </div>
        </>
    )
}