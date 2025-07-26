import Image from "next/image";
import Link from "next/link";

export default function Engagement({ data }) {
  return (
    <div
      className="w-full p-6 bg-cover bg-center bg-no-repeat rounded-md text-white"
      style={{
        backgroundImage: `url(${data?.values?.[0]?.background?.image})`,
      }}
    >
      {data?.values?.map((item, index: number) => {
        return (
          <div
            key={index}
            className="md:flex md:items-center md:justify-between md:gap-4"
          >
            <div className="md:p-5">
              <Image
                src={item?.top_left_icon_img}
                alt={item?.title}
                width={200}
                height={100}
                className="mb-5"
              />
              <h3 className="mb-2 text-lg font-semibold">{item?.title}</h3>
              <p className="mb-8">{item?.description}</p>

              <Link
                className="bg-green-600/90 hover:bg-green-700 duration-150 text-white  rounded-md px-8 py-3"
                href={item?.cta?.clicked_url}
                target="_blank"
              >
                {item?.cta?.text}
              </Link>
            </div>
            <div>
              <Image
                src={item?.thumbnail}
                alt={item?.title}
                width={400}
                height={100}
                className="mt-8 md:mt-0 rounded-md"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
