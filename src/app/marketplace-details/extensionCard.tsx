import { Button,message } from "antd";
import Image from "next/image";
import React from "react";
import "./marketplace-details.scss";
import Link from "next/link";

interface extensionCardProps {
  iconUrl: string;
  heading: string;
  description: string;
  url: string;
  height?: number;
  width?: number;
}
const ExtensionCard = (props: extensionCardProps) => {
  const { iconUrl, heading, description, url, width, height } = props;

  const handleOpenLink = () => {
    if(heading == "Github App"){
      message.success(`Github App will be coming soon`);
    }else{
       window.open(url, '_blank');
    }
   
   
  };

  return (
    <div className="flex w-3/6 gap-4 relative px-4 py-5 items-start justify-between custom-border extension-card">
      {/* <div className=" absolute w-full h-full left-0 top-0">
        <Image src="/bgs/extension-bg.svg" alt="bgs" fill />
      </div> */}
      <Image
        src={iconUrl}
        alt={heading}
        priority
        className="object-top"
        // objectFit="top"
        width={width}
        height={height}
      />
      <div className="flex flex-col gap-2 w-[70%]">
        <h2 className="text-base tracking-wide">Use it in {heading}</h2>
        <p className="text-[#FFFFFFB2] text-sm tracking-widest font-michroma">
          {description}
        </p>
      </div>
      <div className=" self-end">
        {/* <Link href={url}> */}
          <Button onClick={handleOpenLink} className="flex items-center text-white test-btn border-0 text-base tracking-wider font-michroma">
            <div className=" w-4 h-7 relative mr-1">
              <div className="w-full h-full absolute left-0 top-0">
                <Image
                  src="/marketplace-details/test.svg"
                  alt="marketplace test"
                  fill
                />
              </div>
            </div>
            Try now
          </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ExtensionCard;
