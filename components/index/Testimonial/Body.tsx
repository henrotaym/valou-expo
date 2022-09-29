import { Testimonial } from "@prisma/client";

type Props = { testimonial: Testimonial };

const Body = ({ testimonial }: Props) => {
  return (
    <main className="text-gray-700 bg-slate-50 px-6 pt-6 pb-8 grid gap-4">
      <div
        dangerouslySetInnerHTML={{ __html: testimonial.body }}
        className="grid gap-4"
      />
      <span className="text-right">Valérie</span>
    </main>
  );
};

export default Body;
