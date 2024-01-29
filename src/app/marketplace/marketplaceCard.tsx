import { CheckOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation'

interface marketplaceCardProps {
  toolName: string;
  description: string;
  imageUrl: string;
  name: string;
  data:any
}
const MarketplaceCard = (props: marketplaceCardProps) => {
  const router = useRouter();
  const { toolName, description, imageUrl, name ,data} = props;


  const navigateHandler = () => {
    localStorage.setItem("selectedTool", JSON.stringify(data));
    
     router.push('/marketplace-details');
  
    // const selectedTool  = TOOLSDATA[toolType]
    // console.log("selectedTool",selectedTool)
    // console.log("selectedTool",selectedTool)
    // router.push('/marketplace-tools');
  }

  return (
    <div
    onClick={navigateHandler}
      // key={key}
      className={`recommended-card  text-white font-michroma hover:cursor-pointer`}
    >
      {/* background */}
      <div className="w-full h-full absolute left-0 top-0 -z-10">
        <Image src="/bgs/marketplace-card-bg.svg" alt="background" fill />
      </div>
      {/* content */}
      <div className="flex justify-between items-start">
        <div className="relative w-[6.25rem] h-[1.8rem] flex justify-center items-center">
          <div className="absolute left-0 top-0 w-full h-full -z-10">
            <Image src="/bgs/verfied-bg.svg" alt="bg" fill />
          </div>
          <h4 className="text-xs">
            <CheckOutlined className="mr-1" />
            Verified
          </h4>
        </div>
        <div className="relative w-3.5 h-5 cursor-pointer">
          <div className=" absolute left-0 top-0 w-full h-full">
            <Image src="/icons/saved.svg" alt="save" fill />
          </div>
        </div>
      </div>

      <div className="recommended-card-content mt-8 flex flex-col gap-3">
        <h4 className={`text-sm`}>{toolName}</h4>
        <p className="text-sm text-[rgba(255,255,255,0.7)]">{description}</p>
      </div>
      <div className="w-16 h-16 absolute -right-2 -bottom-1">
        <Image src={imageUrl} alt={name} fill />
      </div>
    </div>
  );
};

export default MarketplaceCard;
