import type { GetServerSideProps, NextPage } from "next";
import { PrismaClient, Testimonial } from "@prisma/client";
import IndexComponents from "@/components/index";

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const testimonials = await prisma.testimonial.findMany();

  return { props: { testimonials } };
};

type Props = { testimonials: Testimonial[] };

const Home: NextPage<Props> = (props: Props) => {
  const { testimonials } = props;

  return (
    <IndexComponents.Testimonial slug="intro" testimonials={testimonials} />
  );
};

export default Home;
