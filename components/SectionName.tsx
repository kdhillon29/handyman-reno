import React from "react";
interface SectionNameProps {
  id?: string;
  name: string;
}
export default function SectionSplit({ id, name }: SectionNameProps) {
  return (
    <div id={id} className="flex  p-3 gap-4 items-center mb-4">
      <div className="bg-primary w-10 h-1"></div>
      <p className="uppercase">{name}</p>
    </div>
  );
}
