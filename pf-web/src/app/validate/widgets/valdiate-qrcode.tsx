import { ScanQrCode } from "lucide-react";

export default function ValdiateQRCode() {
  return (
    <div
      className={`
      my-10 py-15
      rounded-3xl
      border-2 border-dashed
      bg-brand/10 border-brand/50
      `}
    >
      <div
        className={`
          flex flex-col items-center justify-center gap-5
        `}
      >
        <ScanQrCode size={100} className="text-brand/40" />

        <p className="text-brand/70">Posicione o QR Code em frente ao leitor</p>
      </div>
    </div>
  );
}
