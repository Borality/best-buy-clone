import { FC } from "react";
import Link from "next/link";
import { AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";

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
    <footer className="bg-[#f5f7fa] pt-6 md:pt-8">
      <div className="mx-auto w-11/12">
        {/* Link columns */}
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-20 lg:space-x-32">
          <section>
            <h3 className="text-sm font-semibold text-slate-900 md:text-base">Order & Purchases</h3>
            <div className="mt-2 grid gap-1 lg:gap-2">
              {DATA1.map((data) => (
                <FooterItem key={data.text} text={data.text} />
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-semibold text-slate-900 md:text-base">Support & Services</h3>
            <div className="mt-2 grid gap-1 lg:gap-2">
              {DATA2.map((data) => (
                <FooterItem key={data.text} text={data.text} />
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-semibold text-slate-900 md:text-base">Partnerships</h3>
            <div className="mt-2 grid gap-1 lg:gap-2">
              {DATA3.map((data) => (
                <FooterItem key={data.text} text={data.text} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Bottom utility bar */}
      <div className="mt-6 border-t border-slate-200 bg-[#eef3f9]">
        <div className="mx-auto flex w-11/12 flex-col items-center justify-between gap-3 py-4 text-sm text-slate-700 md:flex-row">
          <p>© {new Date().getFullYear()} BestBuy Clone — Built with Next.js & Tailwind</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Do Not Sell My Info</Link>
          </div>
          <div className="flex items-center gap-3 text-xl text-bestbuy_blue">
            <Link href="#" aria-label="Twitter" className="hover:text-blue-800"><AiOutlineTwitter /></Link>
            <Link href="#" aria-label="Instagram" className="hover:text-blue-800"><AiOutlineInstagram /></Link>
            <Link href="#" aria-label="Facebook" className="hover:text-blue-800"><AiFillFacebook /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
