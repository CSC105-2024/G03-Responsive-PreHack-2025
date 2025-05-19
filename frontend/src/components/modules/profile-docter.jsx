import React from "react";
import DetailDocter from "@/components/card/detail-docter.jsx";
import ListDocter from "@/components/list/list-docter.jsx";

const ProfileDocter = () => {
  return (
    <div>
      <div className="lg:w-200 py-20 ">
        <DetailDocter />
      </div>
      <p className="text-3xl">Time slot</p>
      <ListDocter Available={false} />
    </div>
  );
};

export default ProfileDocter;
