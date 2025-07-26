"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Checklists({ data, media, cta_text }) {
  console.log("fff", data);
  return (
    <div>
      <div className="  border border-gray-300 rounded-md p-4 bg-white md:-mt-60">
        {media && media.length > 0 && (
          <Carousel
            showThumbs={true}
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
            thumbWidth={80}
            className=""
            dynamicHeight={false}
            showIndicators={false}
            renderThumbs={() =>
              media?.map((slide, idx) => (
                <div key={idx} className=" h-12 w-full object-contain">
                  <Image
                    key={idx}
                    src={slide?.thumbnail_url || slide?.resource_value}
                    alt={`thumb-${idx}`}
                    // layout="responsive"
                    width={80}
                    height={40}
                    className="object-contain "
                  />
                </div>
              ))
            }
          >
            {media?.map((slide, idx) =>
              slide?.resource_type === "image" ? (
                <div
                  key={idx}
                  className="h-44   object-contain "
                >
                  <Image
                    layout="responsive"
                    width={100}
                    height={80}
                    src={slide?.resource_value}
                    alt={slide.alt}
                    className="object-fill"
                  />
                </div>
              ) : (
                <div key={idx}>
                  {/* <video
                    controls
                    width="100%"
                    style={{ borderRadius: 8, background: "#111" }}
                  >
                    <source src={slide?.thumbnail_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                    <Image
                    layout="responsive"
                    width={100}
                    height={80}
                    src={slide?.thumbnail_url}
                    alt={slide.alt}
                    className="object-fill"
                  />
                </div>
              )
            )}
          </Carousel>
        )}

        <div className="mb-4">
          <p className="text-2xl font-semibold mb-4">
            ৳1000{" "}
            <span className="line-through font-normal ms-1 text-lg">৳5000</span>
          </p>
         

          <button className=" mb-8 mt-2 w-full bg-green-700/90 hover:bg-green-800 text-white   py-3 px-10 rounded-md  border-b-4 border-green-800 transition-all duration-150">
            {cta_text?.name}
          </button>

           <p className="text-lg font-semibold ">এই কোর্সে যা থাকছে</p>
        </div>
        <div>
          {data?.map((item, index: number) => (
            <div key={index} className="flex items-center gap-3 mb-2">
              <Image src={item.icon} alt={item.text} width={20} height={50} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
