import { Testimonial } from "@prisma/client";

type Props = { testimonial: Testimonial };

const Body = ({ testimonial }: Props) => {
  return (
    <main className="text-gray-700 bg-slate-50 px-6 pt-14 pb-16 grid gap-16">
      <div
        dangerouslySetInnerHTML={{ __html: testimonial.body }}
        className="grid gap-4"
      />
      <span className="text-right mr-2 font-medium text-[#614450]">
        {testimonial.model}
      </span>
    </main>
  );
};

export default Body;
