import Image from "next/image";
import Navbar from "@/components/nav";
import Hero from "@/components/hero"

export default function Home() {
  return (
    <section>
      <Hero></Hero>
      <Navbar></Navbar>
    </section>
  );
}