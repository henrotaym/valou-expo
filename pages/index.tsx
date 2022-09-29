import type { NextPage } from "next";
import Head from "next/head";
// import { PrismaClient, Testimonial } from "@prisma/client";
// import IndexComponents from "@/components/index";

// export const getServerSideProps: GetServerSideProps = async () => {
//   const prisma = new PrismaClient();
//   const testimonials = await prisma.testimonial.findMany();

//   return { props: { testimonials } };
// };

// type Props = { testimonials: Testimonial[] };

const Home: NextPage = () => {
  // const { testimonials } = props;
  return (
    <>
      <Head>
        <title>Peines de coeur</title>
      </Head>
      <div>
        {/* {testimonials.map((t) => (
          <IndexComponents.Testimonial testimonial={t} />
        ))} */}
      </div>
    </>
  );
};

export default Home;
