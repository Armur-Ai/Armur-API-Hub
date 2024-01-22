"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { DISCOVERTOOLS } from "./data.json";

const MarketplaceDiscoverToolsSlider = () => {
  const sliderSetting: any = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "discoverSlider",
    autoplay: true,
    centerMode: true,
    row: 1,
  };

  return (
    <div className="md:hidden block py-10">
      <Slider {...sliderSetting}>
        {Object?.values(DISCOVERTOOLS)?.map((data: any, key: number) => (
          <div key={key} className="discover-card mx-3 ">
            <Link href={data?.link}>
              <div className="w-full discover-card-image relative">
                <div className="w-full h-full absolute left-0 top-0">
                  <Image
                    src={data?.imageUrl}
                    alt={data.name}
                    fill
                    className=" object-cover object-left-tops rounded-tl-[1.25rem] rounded-tr-[1.25rem]"
                  />
                </div>
              </div>
              <div className="discover-card-content">
                <h4 className={`font-michroma xl:text-lg text-sm !text-white`}>
                  {data.name}
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MarketplaceDiscoverToolsSlider;
