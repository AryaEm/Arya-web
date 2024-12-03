'use client'

import { useState } from "react"
// import Image from "next/image"
import Link from "next/link"
import { HiMiniHome } from "react-icons/hi2";
import { FaPersonRifle } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

export default function Navbar() {

    const [isNavVisible, setIsNavVisible] = useState(false)

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible)
    }

    return (
        <>
            <div className="burgerShadow absolute z-[999] top-5 cursor-pointer left-5 bgPrimary w-14 h-14 rounded-full flex justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <label className="relative cursor-pointer">
                    <input onClick={toggleNav} type="checkbox" className="hidden peer" />
                    <svg
                        viewBox="0 0 32 32"
                        className="h-12 transition-transform duration-600 ease-in-out peer-checked:rotate-[-45deg]"
                    >
                        <path
                            className="line line-top-bottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        />
                        <path className="line" d="M7 16 27 16" />
                    </svg>
                </label>
            </div>

            <div className={`
                    fixed overflow-hidden top-5 left-5 rounded-full bg-[#565656] backdrop-blur-sm bg-opacity-40 h-14 flex justify-end pr-5 items-center gap-8 font-medium text-zinc-200 
                    transform transition-all duration-700
                    ${isNavVisible ? "xl:w-[490px] w-[380px]" : "w-14"
                    } `}>
                <Link href={'/'} className="flex items-center gap-1"><HiMiniHome className="xl:flex hidden text-xl" />Home</Link>
                <Link href={'about'} className="flex items-center gap-1"><FaPersonRifle className="xl:flex hidden text-xl"/>About</Link>
                <Link href={''} className="flex items-center gap-1"><FaLaptopCode className="xl:flex hidden text-xl"/>Project</Link>
                <Link href={''} className="flex items-center gap-1"><RiMessage3Fill className="xl:flex hidden text-xl"/>Contact</Link>
            </div>
        </>
    )
}