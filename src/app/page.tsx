import Image from "next/image";
import Navbar from "@/components/nav";
import Hero from "@/components/hero"
import podium from "@/assets/3d podium.svg"

export default function Home() {
  return (
    <section className="h-dvh w-full box-border overflow-hidden">
      <Image src={podium} alt="background" className="h-full w-full object-cover absolute object-[10%] -z-[1] overflow-hidden box-border" />
      <Hero></Hero>
      <Navbar></Navbar>
    </section>
  );
}