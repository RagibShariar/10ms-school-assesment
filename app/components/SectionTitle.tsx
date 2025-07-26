import React from "react";

export default function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-xl md:text-2xl font-semibold my-4">{title}</h2>;
}
