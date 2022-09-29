import withLayout from "@/layout";
import { Testimonial } from "@prisma/client";
import Head from "next/head";
import { useMemo } from "react";
import Body from "./Body";
import Header from "./Header";

type Props = {
  testimonials: Testimonial[];
  slug: string;
};

const TestimonialC = ({ testimonials, slug }: Props) => {
  const testimonial = useMemo(
    () => testimonials.find((t) => t.slug === slug),
    [testimonials, slug]
  );

  if (!testimonial)
    return (
      <>
        <Head>
          <title>Peines de coeur - non trouvé</title>
        </Head>
        <div className="h-screen w-full flex justify-center items-center">
          <div className="bg-gradient-to-br from-[#4f343e] to-[#64424e] absolute inset-x-0 top-0 h-20 rounded-b-lg" />
          Non trouvé
        </div>
      </>
    );
  return (
    <>
      <Head>
        <title>Peines de coeur - {testimonial.title}</title>
      </Head>
      <Header testimonial={testimonial} />
      <Body testimonial={testimonial} />
    </>
  );
};

export default withLayout(TestimonialC);
