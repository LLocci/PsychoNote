import { RecorderButton } from "./RecorderButton";

export const BottomRecorderDiv: React.FC = () => {
  return (
    <footer
      className="bg-primary
         fixed 
         inset-x-0 
         bottom-0
         flex 
         items-center 
         justify-center
         h-40 
         p-4"
    >
      <RecorderButton />
    </footer>
  );
};
