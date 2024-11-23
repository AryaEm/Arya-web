import Image from "next/image";
import Navbar from "@/components/nav";
import Hero from "@/components/hero"
import podium from "@/assets/3d podium.svg"

export default function Home() {
  return (
    <section className="h-dvh w-full">
      <Image src={podium} alt="background" className="h-full w-full object-cover absolute object-[10%] -z-[1]"/>
      <Hero></Hero>
      <Navbar></Navbar>
    </section>
  );
}