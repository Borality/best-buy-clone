import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  <div className="flex max-w-[140px] flex-col items-center justify-center">
    <Image
      alt="product"
      width={500}
      height={500}
      src={src}
      className="h-auto max-w-[130px] object-contain"
    ></Image>
    <h3 className="... mt-2 min-h-[1.5rem] max-w-[150px] truncate text-center text-xs text-bestbuy_blue hover:text-blue-950 hover:underline md:mt-5">
      {title}
    </h3>
  </div>
);

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 gap-2 pt-3 md:grid-cols-2 md:gap-6 lg:pt-7">
      <Card className="max-w-3xl text-center">
        <div className="mx-1 mb-2 mt-4 md:mx-14 md:mb-10 md:mt-16">
          <CardHeader>
            <CardTitle className="text-xl md:text-3xl">Macbook</CardTitle>
            <CardDescription className="text-sm font-bold md:text-lg">
              Models as low as $749.99.
            </CardDescription>
            <CardDescription className="md:text-md text-xs">
              Also, shop more great deals on Apple Products.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 flex items-center justify-center lg:mt-16">
            <Image
              width={500}
              height={500}
              alt="macbook"
              src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/macbook.jpeg?alt=media&token=b4cad6a8-12d9-4b3c-9302-846a7add46b3"
              className="max-h-28 max-w-xs md:max-h-full lg:max-w-md xl:max-w-lg"
            ></Image>
          </CardContent>
        </div>
      </Card>
      <section className="grid gap-2 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className=" text:md text-start md:text-lg">
              Today's top picks
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-flow-row justify-center gap-1 lg:grid-flow-col lg:gap-5">
            {DATA.map((data) => (
              <CardItem
                key={data.title}
                src={data.src}
                title="MacBook Air 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB"
              />
            ))}
          </CardContent>
        </Card>
        <section className="grid grid-cols-2 gap-2 md:gap-6">
          <Card className="flex flex-col justify-center">
            <CardHeader className="flex-1">
              <CardTitle className="w-fit bg-bestbuy_blue px-2 py-1 text-base md:text-lg">
                <span className="text-yellow-400">Outlet</span>{" "}
                <span className="text-white">Deals</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full text-2xl font-bold lg:text-5xl">
              <p className="leading-8 lg:leading-[3.5rem]">
                <span className="text-red-700">Clearance</span>, open-box and
                more.
              </p>
            </CardContent>
            <CardFooter className="flex-none text-xs text-bestbuy_blue hover:text-blue-950 hover:underline md:text-sm">
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
            <CardContent className="flex h-full flex-col items-center justify-center">
              <Image
                width={500}
                height={500}
                alt="earbuds"
                src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/earbuds.jpeg?alt=media&token=cda5546a-e130-4e05-87e2-c3f4a78a8a13"
                className="max-w-[100px] lg:max-w-[250px]"
              ></Image>
              <p className="md-1 line-clamp-1 text-xs text-bestbuy_blue hover:text-blue-950 hover:underline md:mt-2 lg:text-sm">
                SanDisk - Extreme Portable 1TB External USB-C NVMe SSD - Black
              </p>
            </CardContent>
            <CardFooter className="flex-none text-xs text-bestbuy_blue hover:text-blue-950 hover:underline md:text-sm">
              See bonus deals
            </CardFooter>
          </Card>
        </section>
      </section>
    </div>
  );
};

export default Hero;
