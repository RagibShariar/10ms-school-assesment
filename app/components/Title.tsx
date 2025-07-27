import titleBG from "@/public/assets/banner.jpeg";
import Image from "next/image";
import { Course } from "../types/courseData";

export default function Title({ data }: { data: Course }) {
  return (
    <div className="relative pb-14 pt-20 md:py-30 ">
      <Image
        src={titleBG}
        alt="Title background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className=" z-10 p-4 md:pl-32">
        <h1 className="text-4xl mb-3 font-semibold font-mixed text-white">
          {data?.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className="font-mixed text-gray-400 max-w-3xl"
        ></div>
      </div>
    </div>
  );
}
