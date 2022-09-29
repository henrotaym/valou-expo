import { Testimonial } from "@prisma/client";
import { ComponentType } from "react";
import Footer from "./Footer";
import Header from "./Header";

// const withLayout = <P extends object>(Component: ComponentType<P>) => {
//   return <Component {...(props as P)} />;
// };

type Props = {
  testimonials: Testimonial[];
};

const withLayout = <P extends Props>(Component: ComponentType<P>) => {
  const Layout = (props: P) => (
    <div>
      <Header {...props} />
      <Component {...props} />
      <Footer />
    </div>
  );

  return Layout;
};

export default withLayout;
