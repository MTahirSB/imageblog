import React from "react";
import image1 from "./Assets/image1.jpg";
import image3 from "./Assets/image2.jpg";
import image4 from "./Assets/image3.jpg";
import image2 from "./Assets/image4.jpg";
import image5 from "./Assets/image5.jpg";
import image6 from "./Assets/image6.jpg";
import image7 from "./Assets/image7.jpg";
import image8 from "./Assets/image8.jpg";
import image9 from "./Assets/image9.jpg";
import image10 from "./Assets/image10.jpg";
import image11 from "./Assets/image11.jpg";

const AllImages = () => {
  let data = [
    {
      id: 1,
      src: image1,
      cap: "A Galaxy",
      desc: "image description"
    },
    {
      id: 2,
      src: image2,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 3,
      src: image10,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 4,
      src: image4,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 5,
      src: image11,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 6,
      src: image6,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 7,
      src: image7,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 8,
      src: image8,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 9,
      src: image9,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 10,
      src: image3,
      cap: "Scene",
      desc: "image description"
    },
    {
      id: 11,
      src: image5,
      cap: "Scene",
      desc: "Aquarium"
    },
  ];

  return (
    <div className=" bg-black w-full max-w-full p-4 lg:columns-4 md:columns-3 sm:columns-1 ">
      {data.map((item, index) => {
        return (
          <div className=" ">
            <div className="group mb-10 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={item.src}
                  alt={item.index}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-1xl font-bold text-white">
                  {item.cap}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.desc}
                </p>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllImages;
