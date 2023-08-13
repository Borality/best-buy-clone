import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import MostViewedItemsSection from "@/components/MostViewedItemsSection";
import FooterSection from "@/components/layouts/FooterSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white text-black">
      <div className={`mx-auto w-11/12 lg:w-[98%] ${inter.className}`}>
        <HeroSection></HeroSection>
        <MostViewedItemsSection></MostViewedItemsSection>
      </div>
    </main>
  );
}
