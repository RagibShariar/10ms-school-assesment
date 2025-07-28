import titleBG from "@/public/assets/banner.jpeg";
import Image from "next/image";
import { Course } from "../types/courseData";

export default function Title({ data }: { data: Course }) {
  return (
    <section className="relative py-6 md:py-24 ">
      <Image
        src={titleBG}
        alt="Title background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="container mx-auto p-4 z-10  ">
        <h1 className="text-2xl md:text-4xl mb-3 font-semibold font-mixed text-white">
          {data?.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className="md:max-w-3xl font-mixed text-gray-400 "
        ></div>
      </div>
    </section>
  );
}
