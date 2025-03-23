import { RecorderButton } from "./RecorderButton";

export const BottomRecorderDiv: React.FC = () => {
  return (
    <footer
      className="bg-primary
         fixed 
         inset-x-0 
         bottom-0
         h-40 
         p-4"
    >
      <RecorderButton />
    </footer>
  );
};
