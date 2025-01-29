import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="md:px-6 px-2 py-3 bg-primary/70 text-white text-xl  rounded-xl w-1/2 md:w-auto "
      {...rest}
    >
      {children ? children : <Link href="/contact/#contact">Contact Us </Link>}
    </button>
  );
};

export default Button;
