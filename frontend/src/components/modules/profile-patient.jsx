import React from "react";
import DetailPatient from "@/components/card/detail-patient.jsx";
import ListBook from "@/components/list/list-book.jsx";

const ProfilePatient = () => {
  return (
    <div>
      <div className="lg:w-200 py-20 ">
        <DetailPatient />
      </div>
      <p className="text-3xl">Your Appointments</p>
      <ListBook Available={false} />
    </div>
  );
};

export default ProfilePatient;
