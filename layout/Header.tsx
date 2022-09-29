import { Testimonial } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";

type TestimonialLinkProps = {
  close: () => void;
  testimonial: Testimonial;
};

const TestimonialLink = ({ testimonial, close }: TestimonialLinkProps) => {
  const router = useRouter();
  const { query } = router;
  const isActive = useMemo(
    () => query.slug === testimonial.slug,
    [query.slug, testimonial.slug]
  );
  return (
    <li
      key={testimonial.slug}
      className={isActive ? "text-[#996778] font-medium" : ""}
    >
      <Link href={`/testimonials/${testimonial.slug}`}>
        <a onClick={close}>{testimonial.navLink}</a>
      </Link>
    </li>
  );
};

type OpenedHeaderProps = {
  close: () => void;
  testimonials: Testimonial[];
};
const OpenedHeader = ({ close, testimonials }: OpenedHeaderProps) => {
  return (
    <div className="inset-0 fixed z-10 bg-white flex items-center">
      <button type="button" className="absolute left-8 top-10" onClick={close}>
        <div className="w-8 h-[1px] bg-gray-700 transform rotate-45" />
        <div className="w-8 h-[1px] bg-gray-700 transform -rotate-45" />
      </button>
      <ul className="grid gap-4 ml-10 text-lg uppercase text-gray-700">
        {testimonials.map((t) => (
          <TestimonialLink testimonial={t} key={t.id} close={close} />
        ))}
      </ul>
    </div>
  );
};

type ClosedHeaderProps = {
  open: () => void;
};

const ClosedHeader = ({ open }: ClosedHeaderProps) => {
  return (
    <button
      type="button"
      className="absolute z-10 left-8 top-8 grid gap-2"
      onClick={open}
    >
      <div className="w-8 h-[1px] bg-white" />
      <div className="w-8 h-[1px] bg-white" />
      <div className="w-8 h-[1px] bg-white" />
    </button>
  );
};

type HeaderProps = {
  testimonials: Testimonial[];
};

const Header = ({ testimonials }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return isOpen ? (
    <OpenedHeader close={close} testimonials={testimonials} />
  ) : (
    <ClosedHeader open={open} />
  );
};

export default Header;
