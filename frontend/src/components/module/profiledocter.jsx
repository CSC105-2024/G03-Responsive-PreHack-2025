import React from "react";
import DetailDocter from "@/components/card/detail-docter";
import ListDocter from "@/components/list/list-docter";

const Profiledocter = () => {
  return (
    <div>
      <div className="lg:w-200 py-20 ">
        <DetailDocter />
      </div>
      <p className="text-3xl">Time slot</p>
      <ListDocter />
    </div>
  );
};

export default Profiledocter;
