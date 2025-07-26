import SectionTitle from "./SectionTitle";

export default function LearningOutcomes({ data }) {
  return (
    <section className="py-8">
      <SectionTitle title={data?.name} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:border border-gray-300 rounded-md md:p-6 mt-6">
        {data?.values?.map((item, index: number) => {
          return (
            <div key={index} className=" flex gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="mr-1 mt-[2px] flex-shrink-0"
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
              <p>{item?.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
