import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="md:px-12 px-4 py-4 bg-primary text-white text-xl w-1/2 md:w-auto "
      {...rest}
    >
      {children ? children : <Link href="/contact">Contact Us </Link>}
    </button>
  );
};

export default Button;
