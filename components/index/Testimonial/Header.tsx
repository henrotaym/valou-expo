import { Testimonial } from "@prisma/client";
import Image from "next/image";

type Props = { testimonial: Testimonial };

const Header = ({ testimonial }: Props) => {
  return (
    <header>
      <figure className="h-screen bg-red-500 relative">
        <Image src={testimonial.picture} layout="fill" objectFit="cover" />
        <figcaption className="absolute inset-0 flex items-center justify-center p-4">
          <span className="text-center grid grid-col gap-2 text-white">
            <span className="uppercase font-medium text-[40px]">
              {testimonial.title}
            </span>
            <span className="uppercase font-light">{testimonial.subtitle}</span>
          </span>
        </figcaption>
        <span className="w-[1px] h-12 absolute bg-gray-50 bottom-11 right-6 rounded-full" />
        <span className="absolute bottom-0 inset-x-0 h-2 bg-slate-50 rounded-t-2xl" />
      </figure>
    </header>
  );
};

export default Header;
