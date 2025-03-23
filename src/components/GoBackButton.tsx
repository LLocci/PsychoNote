import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { PSYCHONOTE_BASE_URL } from "@/router/routes";

export const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button variant="ghost" onClick={() => navigate(PSYCHONOTE_BASE_URL)}>
      <ChevronLeft />
    </Button>
  );
};
