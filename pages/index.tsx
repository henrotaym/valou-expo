import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { PrismaClient, Testimonial } from "@prisma/client";
import IndexComponents from "@/components/index";

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const testimonials = await prisma.testimonial.findMany();
  console.log({ testimonials });
  if (!testimonials.length) {
    const testimonial = await prisma.testimonial.create({
      data: {
        title: "test",
        picture: "/testimonials/broken-mirror.jpg",
        body: "corps",
        slug: "test",
        subtitle: "Texte de Aude",
      },
    });
    console.log({ testimonial });
  }
  return { props: { testimonials } };
};

type Props = { testimonials: Testimonial[] };

const Home: NextPage<Props> = (props: Props) => {
  const { testimonials } = props;
  return (
    <>
      <Head>
        <title>Peines de coeur {testimonials.length} </title>
      </Head>
      <div>
        {testimonials.map((t) => (
          <IndexComponents.Testimonial testimonial={t} />
        ))}
      </div>
    </>
  );
};

export default Home;
