import { Loader2 } from "lucide-react";

export default function Spinner() {
  return (
    <div
      className={`
        fixed inset-0 z-50
        flex flex-col items-center justify-center
        text-blue-900 bg-white/80
      `}
    >
      <Loader2 className="animate-spin" size={48} />
      <p>Aguarde um momento, estamos gerando seu ticket...</p>
    </div>
  );
}
