import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { MdStore } from "react-icons/md";
import { Input } from "@/components/ui/input";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const categories = [
    "Top Deals",
    "Deal of the Day",
    "Credit Cards",
    "Back to School",
    "Appliances",
    "TV & Home Theater",
    "Computers",
    "Tablets",
    "Video Games",
    "Toys",
  ];

  return (
    <header className="sticky top-0 z-40 text-white shadow-sm">
      {/* Promo strip */}
      <div className="w-full bg-[#072e77] text-xs md:text-sm">
        <div className="mx-auto flex w-11/12 items-center justify-between py-2">
          <p className="truncate pr-3">
            Free 2-day shipping on orders $35+ for members. Join for free.
          </p>
          <Link href="#" className="shrink-0 underline hover:text-blue-200">
            Learn more
          </Link>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-bestbuy_blue">
        <nav className="mx-auto flex w-11/12 items-center gap-3 py-3 md:gap-6">
          <section className="flex flex-1 items-center gap-3 md:gap-6">
            <Link href="/" className="min-w-fit hover:opacity-90">
              <Image
                src="https://images.unsplash.com/vector-1754830014296-e73b22025ee7?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={518}
                height={518}
                alt="best-buy"
                className="h-10 w-10 object-contain md:h-12 md:w-12"
              />
            </Link>

            <button
              type="button"
              aria-expanded="false"
              aria-controls="main-navigation"
              className="hidden items-center gap-2 rounded-md bg-[#07348a] px-3 py-2 text-sm md:flex"
            >
              <AiOutlineMenu className="text-xl" />
              <span className="hidden md:inline">Menu</span>
            </button>

            <div className="relative flex w-full max-w-xl items-center">
              <Input
                className="h-9 w-full rounded-md border-0 bg-white pr-10 text-slate-900 placeholder:text-slate-700 caret-bestbuy_blue focus-visible:ring-2 focus-visible:ring-bestbuy_yellow md:h-10"
                placeholder="What can we help you find today?"
                aria-label="Search"
              />
              <div className="pointer-events-none absolute right-2 grid h-6 w-6 place-items-center md:h-7 md:w-7">
                <Image width={24} height={24} alt="search" src="/search.svg" className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
          </section>

          <section className="hidden flex-none items-center gap-6 md:flex">
            <div className="flex items-center gap-2">
              <MdStore className="text-2xl" />
              <div className="text-sm md:text-base">Princeton</div>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineUser className="text-2xl" />
              <div className="text-sm md:text-base">Account</div>
            </div>
            <Link href="#" className="flex items-center gap-2">
              <AiOutlineShoppingCart className="text-2xl" />
              <div className="text-sm md:text-base">Cart</div>
            </Link>
          </section>

          <Link href="#" className="block flex-none md:hidden">
            <AiOutlineShoppingCart className="text-2xl" />
          </Link>
        </nav>
      </div>

      {/* Categories bar */}
      <div className="w-full border-b border-blue-100 bg-[#f7f9fc] text-[#07348a]">
        <div className="mx-auto w-11/12 overflow-x-auto">
          <ul className="flex w-max gap-2 py-2 md:gap-3">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  href="#"
                  className="inline-block rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium hover:border-blue-300 hover:bg-blue-50 md:text-sm"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
