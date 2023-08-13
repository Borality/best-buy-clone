import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { MdStore } from "react-icons/md";
import { Input } from "@/components/ui/input";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="bg-bestbuy_blue text-white sticky top-0">
      <nav className="flex w-11/12 lg:11/12 mx-auto items-center space-x-4 md:space-x-10 py-3">
        <section className="flex flex-1 space-x-4 md:space-x-12 justify-center items-center md:w-5/12 ">
          <Link href="" className="hover:text-primary min-w-fit">
            <Image
              src="/best-buy-logo.png"
              width={518}
              height={518}
              alt="best-buy"
              className="w-11 h-11 md:w-12 md:h-12 object-contain"
            />
          </Link>
          <Link href="" className="text-sm font-medium hover:text-primary">
            <div className="flex space-x-1 items-center ">
              <AiOutlineMenu className="text-2xl" />
              <div className="text-xl hidden md:block">Menu</div>
            </div>
          </Link>
          <div className="flex w-full">
            <Input
              className="rounded-l-[5px] h-8 md:h-10 md:max-w-screen-sm bg-white border-white text-gray-500"
              placeholder="What can we help you find today?"
            />
            <div className=" h-8 md:h-10 w-11 bg-white grid place-items-center rounded-r-[5px]">
              <img src="/search.svg" className="w-5 h-5 md:w-7 md:h-7"></img>
            </div>
          </div>
        </section>
        <section className="hidden md:block flex-none">
          <div className="flex space-x-9">
            <div className="flex space-x-1 items-center">
              <MdStore className="text-2xl" />
              <div className="text-xl">Princeton</div>
            </div>
            <div className="flex space-x-1 items-center">
              <AiOutlineShoppingCart className="text-2xl" />
              <div className="text-xl">Cart</div>
            </div>
          </div>
        </section>
        <Link href="" className="block md:hidden flex-none">
          <AiOutlineShoppingCart className="text-2xl" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
