import Image from "next/image";
import { ExclusiveFeatureValue, Section } from "../types/courseData";
import SectionTitle from "./SectionTitle";

export default function ExclusiveFeatures({ data }) {

  return (
    <section className="mb-8">
      <SectionTitle title={data?.name} />
      <div className="border border-gray-300 rounded-md p-4 mt-6">
        {data?.values?.map((item, index: number) => {
         
          return (
            <div key={index} className="mb-6 md:flex justify-between gap-4 ">
              <div>
                <h4 className="mb-3">{item?.title}</h4>
                <div>
                  {item?.checklist?.map(
                    (checkItem: string, checkIndex: number) => (
                      <div className="mb-2 flex gap-6" key={checkIndex + 30}>
                        <div>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="mr-1 mt-[2px] inline-block"
                            style={{ color: "#6294F8" }}
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-600">{checkItem}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <Image
                  src={item?.file_url}
                  alt={item?.title}
                  width={200}
                  height={150}
                  className="object-contain md:my-0 my-8"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
