import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { FeaturesValue } from "../types/courseData";

export default function Features({ data }: { data: FeaturesValue }) {
  return (
    <section className="pb-6">
      <SectionTitle title={data?.name} />
      <div>
        <div className="bg-[#111827] grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-10 p-6 md:p-8 rounded-lg">
          {data?.values?.map((item, index: number) => {
            return (
              <div key={index + 1} className="text-white  flex  gap-4">
                <div className=" w-[40px] h-[40px]  flex-shrink-0">
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    width={40}
                    height={40}
                    className="object-contain "
                  />
                </div>
                <div>
                  <h4 className="text-lg ">{item?.title}</h4>
                  <p className="text-gray-400 text-sm">{item?.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
