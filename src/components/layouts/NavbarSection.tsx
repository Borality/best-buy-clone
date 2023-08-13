import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { MdStore } from "react-icons/md";
import { Input } from "@/components/ui/input";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="sticky top-0 bg-bestbuy_blue text-white">
      <nav className="lg:11/12 mx-auto flex w-11/12 items-center space-x-4 py-3 md:space-x-10">
        <section className="flex flex-1 items-center justify-center space-x-4 md:w-5/12 md:space-x-12 ">
          <Link href="" className="min-w-fit hover:text-primary">
            <Image
              src="/best-buy-logo.png"
              width={518}
              height={518}
              alt="best-buy"
              className="h-11 w-11 object-contain md:h-12 md:w-12"
            />
          </Link>
          <Link href="" className="text-sm font-medium hover:text-primary">
            <div className="flex items-center space-x-1 ">
              <AiOutlineMenu className="text-2xl" />
              <div className="hidden text-xl md:block">Menu</div>
            </div>
          </Link>
          <div className="flex w-full">
            <Input
              className="h-8 rounded-l-[5px] border-white bg-white text-gray-500 md:h-10 md:max-w-screen-sm"
              placeholder="What can we help you find today?"
            />
            <div className=" grid h-8 w-11 place-items-center rounded-r-[5px] bg-white md:h-10">
              <img src="/search.svg" className="h-5 w-5 md:h-7 md:w-7"></img>
            </div>
          </div>
        </section>
        <section className="hidden flex-none md:block">
          <div className="flex space-x-9">
            <div className="flex items-center space-x-1">
              <MdStore className="text-2xl" />
              <div className="text-xl">Princeton</div>
            </div>
            <div className="flex items-center space-x-1">
              <AiOutlineShoppingCart className="text-2xl" />
              <div className="text-xl">Cart</div>
            </div>
          </div>
        </section>
        <Link href="" className="block flex-none md:hidden">
          <AiOutlineShoppingCart className="text-2xl" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
