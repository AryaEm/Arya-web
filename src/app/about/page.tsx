import Navbar from "@/components/nav"

export default function About() {
    return (
        <>
            <Navbar></Navbar>

            <div className="h-dvh w-full bg-[#1F1F1F] flex justify-center items-end">
                <div className="bg-zinc-900 h-[50%] w-[50%] rounded-tl-full rounded-tr-full border-[1px] border-cyan-200"></div>
            </div>
        </>
    )
}