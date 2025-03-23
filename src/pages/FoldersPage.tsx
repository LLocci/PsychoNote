import { GoBackButton } from "@/components/GoBackButton";
import { BottomRecorderDiv } from "@/components/Recorder/BottomRecorderDiv";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function FoldersPage() {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <>
      <div className="flex justify-self-start">
        <GoBackButton />
      </div>
      <div className="p-6">
        <h1 className="text-primary text-4xl font-bold">Patient {id}</h1>
        <p className="text-muted">Records for patient {id}</p>
      </div>
      <BottomRecorderDiv />
    </>
  );
}
