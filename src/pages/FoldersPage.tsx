import { useParams } from "react-router-dom";

export default function FoldersPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-primary text-4xl font-bold">Patient {id}</h1>
      <p className="text-muted">Records for patient {id}</p>
    </div>
  );
}
