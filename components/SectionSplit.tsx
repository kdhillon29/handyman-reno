import React from "react";
interface SectionSplitProps {
  children: React.ReactNode;
}
export default function SectionSplit({ children }: SectionSplitProps) {
  return (
    <div className="bg-[#F6FCFF] md:py-16 py-8 space-y-8 md:space-y-16">
      {children}
    </div>
  );
}
