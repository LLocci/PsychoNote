import { MicIcon, Square } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";

export const RecorderButton: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  async function startRecording() {
    if (audioURL) {
      URL.revokeObjectURL(audioURL);
      setAudioURL(null);
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.current.push(event.data);
      }
    };

    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
      setAudioURL(URL.createObjectURL(audioBlob));
      audioChunks.current = []; // Clear recorded chunks
    };

    mediaRecorder.current.start();
    setIsRecording(true);
  }

  function stopRecording() {
    mediaRecorder.current?.stop();
    setIsRecording(false);
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Button
        variant={isRecording ? "destructive" : "secondary"}
        size={"lgicon"}
        className="rounded-full"
        onClick={isRecording ? stopRecording : startRecording}
      >
        {isRecording ? <Square /> : <MicIcon />}
      </Button>
      {audioURL && (
        <audio controls>
          <source src={audioURL} type="audio/wav" />
          Your browser does not support the audio tag.
        </audio>
      )}
    </div>
  );
};
