"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TOOLS from "./data.json";
import TOOLSDATA from "./securityTools.json";
import MarketplaceDiscoverToolsSlider from "./marketplaceDiscoverToolsSlider";
import MarketplacePopularToolsSlider from "./marketplacePopularToolsSlider";
import MarketplaceRecommendedToolsSlider from "./marketplaceRecommendedToolsSlider";
import "./marketplace.scss";


const MarketplaceComponent = () => {
  const router = useRouter();



  const navigateHandler = (toolType: string,TOOLSDATA:any) => {
    localStorage.setItem("selectedTool", JSON.stringify(toolType));
    
     router.push('/marketplace-tools');
  
    // const selectedTool  = TOOLSDATA[toolType]
    // console.log("selectedTool",selectedTool)
    // console.log("selectedTool",selectedTool)
    // router.push('/marketplace-tools');
  }

  //--------------------------------------------------------------------
  //                       TITLE_WITH_PARA
  //--------------------------------------------------------------------
  const titleWithPara = (props: { title: string; para: string }) => {
    const { title, para } = props;
    return (
      <div className="flex gap-5 pt-8 md:px-0 px-6">
        <div className="w-5 h-24 relative">
          <div className="w-full h-full absolute left-0 top-0">
            <Image src="/team/line.svg" alt="line" fill />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2
            className={` font-michroma md:text-[1.75rem] text-xl leading-[2.4rem]`}
          >
            {title}
          </h2>
          <p
            className={`lg:text-base text-sm md:w-9/12 font-michroma text-[rgba(255,255,255,0.6)]`}
          >
            {para}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="xl:px-28 md:px-16 px-0 py-5">
      <div className="lg:flex hidden items-center justify-between">
        <div className=" items-center  flex">
          <h2 className="marketplace-title">AI Security</h2>
          <h2 className="marketplace-title">
            <span className=""> &nbsp;</span>Tools Hub
          </h2>
        </div>
        <div className=" relative search-input md:mt-0 mt-5">
          <Input
            prefix={
              <SearchOutlined className="!text-[rgba(204,204,204,0.3)] !text-base mr-1" />
            }
            type="search"
            placeholder="Search for AI Security tools"
            className=" font-michroma"
          />
        </div>
      </div>
      <div className=" lg:hidden block px-6">
        <h2 className="marketplace-title">AI Security Tools Hub</h2>
      </div>
      {/*===================================================================================== 
                          Discover More Tools
      ======================================================================================*/}
      {titleWithPara({
        title: "Discover More Tools",
        para: "Browse through our collections to learn more about new use cases to implement in your app ",
      })}
      <div className="md:grid hidden xl:grid-cols-4 lg:grid-cols-3  grid-cols-2 mt-10 gap-[3rem]">
        {Object?.values(TOOLS)[0]?.map((data: any, key: number) => (
          <div key={key} className="discover-card ">
            {/* <Link href={"/marketplace-tools"}> */}
              <div onClick={() =>navigateHandler(data.toolType,TOOLSDATA)} className="hover:cursor-pointer w-full h-[8.3rem] relative">
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
                <h4 className={`font-michroma text-white xl:text-lg text-base`}>
                  {" "}
                  {data.name}
                </h4>
              </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
      <MarketplaceDiscoverToolsSlider />
      {/*===================================================================================== 
                          Recommended Tools
      ======================================================================================*/}
      {titleWithPara({
        title: "Recommended Tools",
        para: "Tools Curated specifically for you based on functionality offered, performance and requirement.",
      })}
      <MarketplaceRecommendedToolsSlider />
      {/*===================================================================================== 
                          Popular Tools
      ======================================================================================*/}
      {titleWithPara({
        title: "Popular Tools",
        para: "Tools that are popular and used frequently on ARMUR.",
      })}
      <MarketplacePopularToolsSlider />
    </div>
  );
};

export default MarketplaceComponent;
