import { FC } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

interface MostViewedItemsProps {}

type CardMakerProps = {
  src: string;
  title: string;
};

const DATA = [
  {
    src: "/earbuds.jpeg",
    title:
      "Sony - PlayStation 5 Console - Marvel's Spider-Man 2 Limited Edition Bundle",
  },
  {
    src: "/earbuds.jpeg",
    title:
      "Sony - PlayStation 5 Console - Marvel's Spider-Man 2 Limited Edition Bundle",
  },
  {
    src: "/earbuds.jpeg",
    title:
      "Sony - PlayStation 5 Console - Marvel's Spider-Man 2 Limited Edition Bundle",
  },
  {
    src: "/earbuds.jpeg",
    title:
      "Sony - PlayStation 5 Console - Marvel's Spider-Man 2 Limited Edition Bundle",
  },
  {
    src: "/earbuds.jpeg",
    title:
      "Sony - PlayStation 5 Console - Marvel's Spider-Man 2 Limited Edition Bundle",
  },
];

const CardMaker: FC<CardMakerProps> = ({ src, title }) => (
  <Card>
    <div className="flex flex-col justify-center items-center w-11/12 mx-auto pb-1 lg:pb-3">
      <CardContent className="pt-4 lg:pt-10">
        <img src={src} className="max-w-[160px] lg:max-w-[200px]"></img>
      </CardContent>
      <CardTitle className="text-sm line-clamp-2">{title}</CardTitle>
    </div>
  </Card>
);

const MostViewedItems: FC<MostViewedItemsProps> = ({}) => {
  return (
    <div className="py-5 md:py-10">
      <h2 className="text-left font-semibold text-xs md:text-sm underline underline-offset-[12px] decoration-4">
        Most-viewed Items
      </h2>
      <hr className="mt-[11px]"></hr>
      <section className="mt-10 grid grid-flow-row lg:grid-flow-col gap-7">
        {DATA.map(data => (<CardMaker src={data.src} title={data.title} />))}
      </section>
    </div>
  );
};

export default MostViewedItems;
