import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { InstructorValue } from "../types/courseData";

export default function Instructor({ data }: { data: InstructorValue }) {
  
  return (
    <section className="md:pt-6 pb-6">
      <SectionTitle title={data?.name} />
      <div className="md:border border-gray-300 rounded-md">
        {data?.values?.map((item, index: number) => {
          return (
            <div
              key={index}
              className="flex items-center md:items-start gap-5 md:p-4"
            >
              <div>
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item?.name}</h3>
                <div
                  className="text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
