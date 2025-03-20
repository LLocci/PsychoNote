import { TopHeader } from "@/components/TopHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const folders = [
  { id: "1", name: "Patient 1" },
  { id: "2", name: "Patient 2" },
  { id: "3", name: "Patient 3" },
  { id: "4", name: "Patient 4" },
];

export default function HomePage() {
  return (
    <>
      <TopHeader />
      <div className="p-10">
        <h1 className="text-primary text-2xl font-bold mb-4">My Patients</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {folders.map((folder) => (
            <Link key={folder.id} to={`/folders/${folder.id}`}>
              <Card className="p-4 cursor-pointer hover:bg-accent transition">
                <CardContent className="text-muted text-lg font-light">
                  {folder.name}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
