import { MicIcon } from "lucide-react";
import { Button } from "../ui/button";

export const RecorderButton: React.FC = () => {
  return (
    <Button variant={"secondary"} size={"lgicon"} className="rounded-full">
      <MicIcon />
    </Button>
  );
};
