import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
interface HeroProps {}

type CardItemProps = {
  src: string;
  title: string;
};

const DATA = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/macbook.jpeg?alt=media&token=b4cad6a8-12d9-4b3c-9302-846a7add46b3",
    title: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/macbook.jpeg?alt=media&token=b4cad6a8-12d9-4b3c-9302-846a7add46b3",
    title: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/macbook.jpeg?alt=media&token=b4cad6a8-12d9-4b3c-9302-846a7add46b3",
    title: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/macbook.jpeg?alt=media&token=b4cad6a8-12d9-4b3c-9302-846a7add46b3",
    title: "MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB",
  },
];

const CardItem: FC<CardItemProps> = ({ src, title }) => (
  <div className="flex max-w-[12rem] flex-col items-center justify-center md:max-w-[12rem] lg:max-w-[14rem]">
    <Image
      layout="responsive"
      alt="product"
      width={500}
      height={500}
      src={src}
      className="h-auto max-w-[12rem] object-contain md:max-w-[12rem] lg:max-w-[14rem]"
    ></Image>
    <h3 className="mt-2 line-clamp-2 text-center text-xs text-bestbuy_blue hover:text-blue-950 hover:underline md:mt-3">
      {title}
    </h3>
  </div>
);

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-12 md:gap-6">
      {/* Left: Text + CTA */}
      <Card className="md:col-span-7">
        <CardHeader className="pb-2">
          <div className="inline-flex w-fit items-center gap-2 rounded-md bg-yellow-400/90 px-2 py-1 text-[10px] font-semibold text-black md:text-xs">
            Limited-time savings
          </div>
          <h1 className="mt-2 text-2xl leading-tight md:text-4xl">
            Upgrade your tech without the splurge
          </h1>
          <CardDescription className="mt-1 max-w-xl text-sm md:text-base">
            Laptop and accessory bundles starting at just $749. Make the most of back-to-school season.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center md:block">
          <Image
            layout="responsive"
            width={1600}
            height={900}
            alt="macbook"
            src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/macbook.jpeg?alt=media&token=b4cad6a8-12d9-4b3c-9302-846a7add46b3"
            className="h-auto max-w-[18rem] md:max-w-full lg:max-w-2xl"
          ></Image>
        </CardContent>
        <CardFooter className="flex gap-3">
          <button className="rounded-md bg-bestbuy_blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800">
            Shop laptop deals
          </button>
          <button className="rounded-md border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-bestbuy_blue hover:bg-blue-50">
            Explore Apple
          </button>
        </CardFooter>
      </Card>

      {/* Right: Picks and promos */}
      <section className="grid gap-4 md:col-span-5">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-base md:text-lg">Today&apos;s top picks</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-flow-row justify-center gap-3 lg:grid-flow-col lg:gap-5">
            {DATA.map((data) => (
              <CardItem key={data.title} src={data.src} title={data.title} />
            ))}
          </CardContent>
        </Card>
        <section className="grid grid-cols-2 gap-4">
          <Card className="flex flex-col justify-center">
            <CardHeader className="flex-1 pb-1">
              <CardTitle className="w-fit bg-bestbuy_blue px-2 py-1 text-base md:text-lg">
                <span className="text-yellow-400">Outlet</span> <span className="text-white">Deals</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full text-xl font-bold md:text-2xl lg:text-4xl">
              <p className="leading-7 md:leading-8 lg:leading-[3rem]">
                <span className="text-red-700">Clearance</span>, open-box and more.
              </p>
            </CardContent>
            <CardFooter className="flex-none text-xs text-bestbuy_blue hover:text-blue-950 hover:underline md:text-sm">
              <a href="#" aria-label="View outlet deals across categories">View outlet deals</a>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-center">
            <CardHeader className="flex-1 pb-1">
              <CardTitle className="text-base md:text-lg">
                <span className="bg-red-700 px-2 py-1 text-white">Deal</span> of the Day
              </CardTitle>
            </CardHeader>
            <CardContent className="flex h-full flex-col items-center justify-center">
              <Image
                layout="responsive"
                width={1296}
                height={603}
                alt="earbuds"
                src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/earbuds.jpeg?alt=media&token=cda5546a-e130-4e05-87e2-c3f4a78a8a13"
                className="h-auto max-w-[12rem] object-contain md:max-w-[12rem] lg:max-w-[14rem]"
              ></Image>
              <p className="md-1 line-clamp-2 text-center text-xs text-bestbuy_blue hover:text-blue-950 hover:underline md:mt-2 lg:text-sm">
                SanDisk - Extreme Portable 1TB External USB-C NVMe SSD - Black
              </p>
            </CardContent>
            <CardFooter className="flex-none text-xs text-bestbuy_blue hover:text-blue-950 hover:underline md:text-sm">
              <a href="#" aria-label="See bonus deals for today">See bonus deals</a>
            </CardFooter>
          </Card>
        </section>
      </section>
    </div>
  );
};

export default Hero;
