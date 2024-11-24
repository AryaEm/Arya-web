import Image from "next/image";
import mici from "@/assets/Michelle (1).svg"
import about from "@/assets/about emoji.svg"
import project from "@/assets/projectEmoji.svg"
import contact from "@/assets/contactEmoji.svg"
import Link from "next/link";
// import podium from "@/assets/3d podium.svg"

export default function Hero() {
    return (
        <>
            {/* <div className="h-dvh w-full absolute -z-[1] bg-black">
                <Image src={podium} alt="3d podium bg" className="h-dvh w-full object-cover object-left" />
            </div> */}

            <div className="w-full h-dvh flex overflow-hidden box-border">

                <div className="h-full xl:w-1/2 w-full text-white flex box-border justify-center overflow-hidden">
                    <div className="absolute bottom-48 xl:bottom-32 cursor-pointer overflow-hidden z-[2] box-border header-text">
                        <h2 className="font-normal overflow-hidden dinotype tracking-wide text-8xl xl:text-9xl">ARYA.</h2>
                    </div>
                    <div className="kotak absolute overflow-x-hidden box-border z-[1] bottom-28 xl:bottom-16 w-[350px] xl:w-[420px] h-64 bg-zinc-400 bg-opacity-40 backdrop-blur-md"></div>
                    <div className="absolute bottom-36 xl:bottom-28 -z-[1] w-[300px] h-[550px] xl:h-[500px] cursor-pointer">
                        <Image src={mici} alt="micheee" className="h-full w-full object-cover" />
                    </div>
                </div>

                <div className="h-full xl:block hidden xl:w-1/2 w-0 overflow-hidden box-border">
                    <div className="w-[40%] h-[35%]  flex justify-end items-end">
                        <Link href={'about'}>
                            <Image src={about} alt="About" className="h-32 w-32 object-cover" />
                        </Link>
                    </div>
                    <div className="w-[77%] h-[18%] flex items-end justify-end">
                        <Image src={project} alt="About" className="h-28 w-28  cursor-pointer object-cover" />
                    </div>
                    <div className="w-[58%] h-[12%] flex justify-end">
                        <Image src={contact} alt="About" className="h-24 w-24  cursor-pointer object-cover" />
                    </div>
                </div>

            </div>
        </>
    )
}