import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface HeroProps {}

type CardItemProps = {
  src: string;
  title: string;
};

const DATA = [
  {
    src: "/macbook.jpeg",
    title: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB",
  },
  {
    src: "/macbook.jpeg",
    title: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB",
  },
  {
    src: "/macbook.jpeg",
    title: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB",
  },
  {
    src: "/macbook.jpeg",
    title: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB",
  },
];

const CardItem: FC<CardItemProps> = ({src, title}) => (
  <div className="flex flex-col items-center justify-center max-w-[140px]">
    <img
      src={src}
      className="max-w-[130px] h-auto object-contain"
    ></img>
    <h3 className="mt-2 md:mt-5 min-h-[1.5rem] text-xs max-w-[150px] text-center truncate ... hover:underline hover:text-blue-950 text-bestbuy_blue">
      {title}
    </h3>
  </div>
);

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 pt-3 lg:pt-7">
      <Card className="text-center max-w-3xl">
        <div className="mt-4 md:mt-16 mb-2 md:mb-10 mx-1 md:mx-14">
          <CardHeader>
            <CardTitle className="text-xl md:text-3xl">Macbook</CardTitle>
            <CardDescription className="text-sm md:text-lg font-bold">
              Models as low as $749.99.
            </CardDescription>
            <CardDescription className="text-xs md:text-md">
              Also, shop more great deals on Apple Products.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 lg:mt-16 flex items-center justify-center">
            <img
              src="/macbook.jpeg"
              className="max-h-28 md:max-h-full max-w-xs lg:max-w-md xl:max-w-lg"
            ></img>
          </CardContent>
        </div>
      </Card>
      <section className="grid gap-2 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className=" text:md md:text-lg text-start">
              Today's top picks
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-flow-row lg:grid-flow-col gap-1 lg:gap-5 justify-center">
            {DATA.map(data => (<CardItem src = "/macbook.jpeg" title="MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB"/>))}
          </CardContent>
        </Card>
        <section className="grid grid-cols-2 gap-2 md:gap-6">
          <Card className="flex flex-col justify-center">
            <CardHeader className="flex-1">
              <CardTitle className="text-base md:text-lg bg-bestbuy_blue w-fit px-2 py-1">
                <span className="text-yellow-400">Outlet</span>{" "}
                <span className="text-white">Deals</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-2xl lg:text-5xl font-bold h-full">
              <p className="leading-8 lg:leading-[3.5rem]">
                <span className="text-red-700">Clearance</span>, open-box and
                more.
              </p>
            </CardContent>
            <CardFooter className="text-xs md:text-sm hover:underline hover:text-blue-950 text-bestbuy_blue flex-none">
              View outlet deals
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-center">
            <CardHeader className="flex-1">
              <CardTitle className="text-base md:text-lg">
                <span className="bg-red-700 px-2 py-1 text-white">Deal</span> of
                the Day
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center flex-col h-full">
              <img
                src="/earbuds.jpeg"
                className="max-w-[100px] lg:max-w-[250px]"
              ></img>
              <p className="text-xs lg:text-sm md-1 md:mt-2 hover:underline hover:text-blue-950 text-bestbuy_blue line-clamp-1">
                SanDisk - Extreme Portable 1TB External USB-C NVMe SSD - Black
              </p>
            </CardContent>
            <CardFooter className="text-xs md:text-sm hover:underline hover:text-blue-950 text-bestbuy_blue flex-none">
              See bonus deals
            </CardFooter>
          </Card>
        </section>
      </section>
    </div>
  );
};

export default Hero;
