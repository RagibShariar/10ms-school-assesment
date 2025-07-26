"use client";
import chevron from "@/public/assets/chevron-down.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";

import SectionTitle from "./SectionTitle";

interface AccordionItemProps {
  header: string;
  children: React.ReactNode;
  isLast: boolean;
}

const AccordionItem = ({
  header,
  children,
  isLast,
  ...rest
}: AccordionItemProps) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <span dangerouslySetInnerHTML={{ __html: header }} />
        <Image
          className={` ml-auto transition-transform duration-200 ease-out  ${
            isEnter && "rotate-180"
          }`}
          src={chevron}
          alt="Chevron"
          width={20}
          height={20}
        />
      </>
    )}
    className={`${!isLast ? "border-b border-dashed border-gray-300 " : ""}`}
    buttonProps={{
      className: ({ isEnter }: { isEnter: boolean }) =>
        `flex w-full py-4  font-normal text-left ${isEnter && ""}`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "mb-4" }}
  >
    {children}
  </Item>
);

export default function CourseDetails({ data }) {
  if (!data || data.type !== "about") return null;

  return (
    <section className="pb-8">
      <SectionTitle title={data?.name} />
      <div className="mt-4 md:px-5 md:border border-gray-300 rounded-md">
        <Accordion>
          {data?.values?.map((item, index: number) => {
            return (
              <AccordionItem
                key={index}
                header={item?.title}
                isLast={index === data?.values?.length - 1}
              >
                <div dangerouslySetInnerHTML={{ __html: item?.description }} />
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
