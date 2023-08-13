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
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center pb-1 lg:pb-3">
      <CardContent className="pt-4 lg:pt-10">
        <img alt="product" src={src} className="max-w-[160px] lg:max-w-[200px]"></img>
      </CardContent>
      <CardTitle className="line-clamp-2 text-sm">{title}</CardTitle>
    </div>
  </Card>
);

const MostViewedItems: FC<MostViewedItemsProps> = ({}) => {
  return (
    <div className="py-5 md:py-10">
      <h2 className="text-left text-xs font-semibold underline decoration-4 underline-offset-[12px] md:text-sm">
        Most-viewed Items
      </h2>
      <hr className="mt-[11px]"></hr>
      <section className="mt-10 grid grid-flow-row gap-7 lg:grid-flow-col">
        {DATA.map((data) => (
          <CardMaker key={data.title} src={data.src} title={data.title} />
        ))}
      </section>
    </div>
  );
};

export default MostViewedItems;
