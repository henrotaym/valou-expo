import { Testimonial } from "@prisma/client";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

type Props = { testimonial: Testimonial };

const TestimonialC = ({ testimonial }: Props) => {
  return (
    <>
      <Header testimonial={testimonial} />
      <Body testimonial={testimonial} />
      <Footer />
    </>
  );
};

export default TestimonialC;
