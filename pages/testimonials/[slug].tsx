import Testimonials from "@/components/index";
import { PrismaClient, Testimonial } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const testimonials = await prisma.testimonial.findMany();

  return { props: { testimonials } };
};

type Props = { testimonials: Testimonial[] };

const TestimonialPage = (props: Props) => {
  const { testimonials } = props;
  const router = useRouter();
  const { query } = router;
  const slug = query.slug as string | undefined;

  return (
    <Testimonials.Testimonial slug={slug ?? ""} testimonials={testimonials} />
  );
};

export default TestimonialPage;
