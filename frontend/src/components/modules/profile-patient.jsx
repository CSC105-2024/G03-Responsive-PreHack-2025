import React from "react";
import DetailPatient from "@/components/card/detail-patient";
import ListBookDoctor from "@/components/list/list-bookDoctor.jsx";

const ProfilePatient = () => {
  return (
    <div>
      <div className="lg:w-200 py-20 ">
        <DetailPatient />
      </div>
      <p className="text-3xl">Your Appointments</p>
      <ListBookDoctor Available={false} />
    </div>
  );
};

export default ProfilePatient;