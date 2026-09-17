import type { Dispatch, SetStateAction } from "react";
import { Clock3, Copy, Share2 } from "lucide-react";

import type { ICheckin } from "../interfaces/icheckin";

import formatDateTime from "@/shared/utils/format-date-time";
import { QRCodeSVG } from "qrcode.react";

interface ICheckinModal {
  checkin: ICheckin;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function CheckinModal({ checkin, setShowModal }: ICheckinModal) {
  const creationDate = formatDateTime(checkin.createdAt);
  const validationDate = formatDateTime(checkin.expiresAt);

  const buttonStyles = `bg-white text-brand p-2 rounded-md hover:cursor-pointer`;

  const qrCodeValue = `https://patientflow.macaoli.com.br/validate/${checkin.validationToken}`;

  function handleClose() {
    setShowModal(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(qrCodeValue);
  }

  function handleShare() {
    return alert("Em desenvolvimento");
  }

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex flex-row md:flex-col items-center justify-center
        bg-white
      `}
    >
      <div
        className={`
          rounded-4xl p-5
          text-white bg-brand
        `}
      >
        <h1 className="text-xs font-medium uppercase text-white/70">
          Seu atendimento foi registrado
        </h1>

        <div className="grid sm:grid-cols-2 justify-between gap-5 text-sm">
          <div>
            <p className="text-6xl py-5">{checkin.code}</p>

            <div className="grid grid-cols-2 gap-1">
              <p>Tipo</p>
              <p>{checkin.priority}</p>

              <p>Criado em </p>
              <p>{creationDate}</p>

              <p>Válido até</p>
              <p>{validationDate}</p>

              <p>Tempo estimado</p>
              <p>~ 18min</p>
            </div>
          </div>

          <div className="grid justify-center mt-5">
            <div className="bg-white p-2 rounded-md ">
              <QRCodeSVG value={qrCodeValue} size={100} />
            </div>

            <div className="flex justify-center gap-5 mt-5">
              <button className={buttonStyles} onClick={handleCopy}>
                <Copy size={20} />
              </button>
              <button className={buttonStyles} onClick={handleShare}>
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-white/85">
          Apresente este QR Code no balcão de validação.
        </p>
        <p className="mt-1 flex items-center gap-2 text-sm text-white/70">
          <Clock3 className="size-4" aria-hidden />
          Seu QR Code é válido por 15 minutos.
        </p>

        <button
          onClick={handleClose}
          className={`
            w-full rounded-full
            py-2 px-6 my-6
            bg-white text-brand
            `}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
