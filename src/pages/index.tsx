import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import MostViewedItems from "@/components/MostViewedItems";
import Footer from "@/components/layouts/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white text-black">
      <div className={`w-11/12 lg:w-[98%] mx-auto ${inter.className}`}>
        <Hero></Hero>
        <MostViewedItems></MostViewedItems>
      </div>
      <Footer/>
    </main>
  );
}
