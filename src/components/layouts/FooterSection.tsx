import { FC } from "react";

interface FooterProps {}

type FooterItemProps = {
  text: string;
};

const DATA1 = [
  {
    text: "Check Order Status",
  },
  {
    text: "Shipping, Delivery & Pickup",
  },
  {
    text: "Returns & Exchanges",
  },
  {
    text: "Price Match Guarantee",
  },
  {
    text: "Product Recalls",
  },
  {
    text: "Trade-In Program",
  },
  {
    text: "Gift Cards",
  },
];

const DATA2 = [
  {
    text: "Visit our Support Center",
  },
  {
    text: "Shop with an Expert",
  },
  {
    text: "Schedule a Service",
  },
  {
    text: "Manage an Appointment",
  },
  {
    text: "Protection & Support Plans",
  },
  {
    text: "Haul Away & Recycling",
  },
  {
    text: "Contact Us",
  },
];

const DATA3 = [
  {
    text: "Affiliate Program",
  },
  {
    text: "Advertise with Us",
  },
  {
    text: "Developers",
  },
  {
    text: "Best Buy Health",
  },
  {
    text: "Best Buy Education",
  },
  {
    text: "Best Buy Business",
  },
];

const FooterItem: FC<FooterItemProps> = ({ text }) => (
  <p className="text-sm text-bestbuy_blue hover:text-blue-950 hover:underline">
    {text}
  </p>
);

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-[#f0f2f4] py-2 md:py-4">
      <div className="mx-auto w-11/12">
        <div className="flex flex-col space-y-5 md:justify-start md:space-x-40 md:space-y-0 md:flex-row ">
          <section>
            <h3 className="text-sm font-semibold md:text-base">
              Order & Purchases
            </h3>
            <div className="mt-1 grid gap-1 md:mt-2 lg:gap-2">
              {DATA1.map((data) => (
                <FooterItem key={data.text} text={data.text} />
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-semibold md:text-base">
              Support & Services
            </h3>
            <div className="mt-1 grid gap-1 md:mt-2 lg:gap-2">
              {DATA2.map((data) => (
                <FooterItem key={data.text} text={data.text} />
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-semibold md:text-base">Partnerships</h3>
            <div className="mt-1 grid gap-1 md:mt-2 lg:gap-2">
              {DATA3.map((data) => (
                <FooterItem key={data.text} text={data.text} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
