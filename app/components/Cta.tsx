import React from "react";
import { CtaText } from "../types/courseData";

export default function Cta({ data }: { data: CtaText }) {
  return (
    <button className=" mb-8 mt-2 w-full bg-green-700/90 hover:bg-green-800 text-white   py-3 px-10 rounded-md  border-b-4 border-green-800 transition-all duration-150">
      {data?.name}
    </button>
  );
}
