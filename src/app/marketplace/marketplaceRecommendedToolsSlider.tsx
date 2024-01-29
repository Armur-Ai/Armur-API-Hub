import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MarketplaceCard from "./marketplaceCard";
import TOOLS from "./data.json";
import TOOLS_DATA from "../marketplace/securityTools.json"

const MarketplaceRecommendedToolsSlider = () => {
  const [recommandedTools, setRecommandedTools] = useState<string[]>([]);



  useEffect(() => {
    const TOOLSDATA: any = TOOLS_DATA;
      
    setRecommandedTools(TOOLSDATA["codeScan"])
  },[])



  const recommendedSettings: any = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  return (
    <div className="pt-9 pb-12 relative md:px-0 px-6">
      <Slider {...recommendedSettings}>
        {Object?.values(recommandedTools)?.map((data: any, key: number) => (
          // <Link href={"/marketplace-details"} key={key}>
            <MarketplaceCard
              {...{
                toolName: data?.toolName,
                description: data?.description,
                imageUrl: data?.imageUrl,
                name: data?.toolName,
                data:data
              }}
            />
          // </Link>
        ))}
      </Slider>
    </div>
  );
};

export default MarketplaceRecommendedToolsSlider;
