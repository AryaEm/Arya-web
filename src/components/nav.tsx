'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { HiMiniHome } from "react-icons/hi2";
import { FaPersonRifle } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

export default function Navbar() {

    const [isNavVisible, setIsNavVisible] = useState(false)

    const toggleNav = () => {
        console.log("Sebelum klik:", isNavVisible); // Menampilkan state sebelum perubahan
        setIsNavVisible(!isNavVisible)
        console.log("Setelah klik:", !isNavVisible); // Menampilkan state setelah perubahan
    }

    return (
        <>
            <div onClick={toggleNav} className="burgerShadow absolute z-[999] top-5 cursor-pointer left-5 bgPrimary w-14 h-14 rounded-full flex justify-center items-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <label className="relative cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
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
                    fixed overflow-hidden top-5 left-5 rounded-full w-[500px] bg-[#055E68] backdrop-blur-md bg-opacity-50 h-14 flex justify-end pr-5 items-center gap-8 font-semibold text-white 
                    transform transition-all duration-700
                    ${isNavVisible ? "w-[450px]" : "w-14"}
                `}>
                <Link href={''} className="flex items-center gap-1"><HiMiniHome className="text-xl" />Home</Link>
                <Link href={''} className="flex items-center gap-1"><FaPersonRifle className="text-xl"/>About</Link>
                <Link href={''} className="flex items-center gap-1"><FaLaptopCode className="text-xl"/>Project</Link>
                <Link href={''} className="flex items-center gap-1"><RiMessage3Fill className="text-xl"/>Contact</Link>
            </div>
        </>
    )
}