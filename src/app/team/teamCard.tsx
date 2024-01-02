import Image from "next/image";
import React from "react";

interface TeamCardProps {
  title: string;
  image: string;
  para: string;
  clientName: string;
  clientCompany: string;
}
const TeamCard = (props: TeamCardProps) => {
  const { title, image, para, clientName, clientCompany } = props;
  return (
    <div className="lg:w-[28.75rem] w-full pt-[3.8] px-9 pb-14 relative transfrom-1200 border-purple-400 border-[1px]">
      <div className="flex flex-col gap-8 pt-12">
        <h3 className="text-[2rem] font-bold">{title}</h3>
        <p className=" text-base">{para}</p>
        <div className="card-one-image relative">
          <div className=" absolute inset-0 w-full h-full">
            <Image src={image} alt={title} fill />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xl">{clientName}</h4>
          <h4 className="text-xl text-[rgb(117,113,133)]">{clientCompany}</h4>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
