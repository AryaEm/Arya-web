"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import background from "@/assets/podium.svg";
import gwa from "@/assets/ini apa.svg";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
    const tiltRef = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.5,
            });
        }
    }, []);

    return (
        <>
            <div className="h-dvh w-full flex justify-center items-end">
                <Image src={background} alt="Ini Background" className="absolute -z-[1] h-full w-full object-cover" />

                {/* content */}
                <div ref={tiltRef} className="h-[60%] xl:w-[20%] w-[70%] relative bottom-36 rounded-lg blurrr flex items-center flex-col cursor-pointer">
                    <div className="border-[1px] border-zinc-200 rounded-full h-[6%] w-[40%] mt-5 flex items-center justify-center">
                        <p className="text-sm font-medium text-zinc-600 cursor-pointer">Music</p>
                    </div>

                    <div className="border-[1px] border-zinc-200 w-[60%] h-[40%] mt-12 rounded-2xl hover3d">
                        <Image src={gwa} alt="gwa" className="h-full w-full object-cover rounded-2xl cursor-pointer" />
                    </div>

                    <div className="mt-5 w-[60%] h-[10%] flex items-center justify-center flex-col">
                        <p className="text-zinc-600 font-semibold text-2xl leading-5">blue</p>
                        <p className="text-zinc-600 font-medium text-base">yung kai</p>
                    </div>

                    <div className="w-[60%] h-[10%] mt-4 flex items-center justify-center gap-10">
                        <IoPlaySkipBack className="text-2xl text-zinc-800 cursor-pointer" />
                        <FaPlay className="text-xl text-zinc-800 cursor-pointer" />
                        <IoPlaySkipForward className="text-2xl text-zinc-800 cursor-pointer" />
                    </div>

                    <div className="h-[15%] w-[20%] rounded-full blur-lg opacity-80 bg-pink-400 absolute -z-[1] left-10 top-20"></div>
                    <div className="h-[15%] w-[20%] rounded-full blur-lg opacity-80 bg-cyan-300 absolute -z-[1] right-10 top-64"></div>
                </div>

                <div className="w-[16%] h-[3%] rounded-full absolute bg-zinc-900 blur-lg -z-[1] bottom-24"></div>
            </div>
        </>
    );
}