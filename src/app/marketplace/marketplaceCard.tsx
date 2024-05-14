import { CheckOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { Button, message } from "antd";

message.config({
  top: 150, // Set the desired top position
  duration: 2, // Set the duration for messages
});
interface marketplaceCardProps {
  toolName: string;
  description: string;
  imageUrl: string;
  name: string;
  data: any;
}
const MarketplaceCard = (props: marketplaceCardProps) => {
  const router = useRouter();
  const { toolName, description, imageUrl, name, data } = props;

  const navigateHandler = () => {
    if (data.disabled === true) {
      // message.success(${data.name} will be comming soon);
    } else {
      localStorage.setItem("selectedTool", JSON.stringify(data));

      router.push("/marketplace-details");
    }

    // console.log("data",data)
    // message.success(Github App will be coming soon);

    // const selectedTool  = TOOLSDATA[toolType]
    // console.log("selectedTool",selectedTool)
    // console.log("selectedTool",selectedTool)
    // router.push('/marketplace-tools');
  };

  return (
    <div
      onClick={navigateHandler}
      // key={key}
      className={
        "recommended-card  text-white font-michroma hover:cursor-pointer"
      }
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
        <h4 className={"text-sm"}>{name}</h4>
        <p className="text-xs text-[rgba(255,255,255,0.7)]">{description}</p>
      </div>
      <Button
        // onClick={navigateHandler}
        className="flex items-center text-white test-btn border-0 text-base tracking-wider font-michroma absolute bottom-[20px]"
      >
        <div className=" w-4 h-7 relative mr-1">
          <div className="w-full h-full absolute left-0 top-0">
            <Image
              src="/marketplace-details/test.svg"
              alt="marketplace test"
              fill
            />
          </div>
        </div>
        {data.disabled === true ? "Coming soon" : "Try now"}
      </Button>
      <div className="w-16 h-16 absolute -right-2 -bottom-1">
        <Image src={imageUrl} alt={name} fill />
      </div>
    </div>
  );
};

export default MarketplaceCard;
