import { ArrowRight } from "lucide-react";

import { CheckInPanelCards } from "../mock/checkin-panel-cards";
import CheckInService from "../services/checkin-service";

export default function CheckInPanel() {
  const checkInService = CheckInService();

  const iconClassName = `
    flex
    w-12 h-12
    rounded-full
    items-center justify-center
  `;

  async function handleCardClick() {
    const result = await checkInService.createCheckIn();

    return alert(result);
  }

  return (
    <div
      className={`
        w-full mt-10
        grid gap-5
        sm:grid-cols-2
        md:grid-cols-3
        justify-between
    `}
    >
      {CheckInPanelCards.map((data) => {
        const Icon = data.icon;

        return (
          <button
            key={data.service}
            onClick={handleCardClick}
            className={`
              grid h-64 w-full
              border rounded-3xl
              pt-6 pb-5 px-4 text-left
              transition-transform duration-200
              hover:scale-[1.01] hover:shadow-lg hover:cursor-pointer
              ${data.colors.borderColor}
              ${data.colors.cardBackground}
              ${data.colors.hoverBorder}
            `}
          >
            <div className="flex justify-between">
              <p className={`${iconClassName} ${data.colors.iconBackground}`}>
                <Icon className={`${data.colors.icon}`} size={18} />
              </p>

              <p className={`text-gray-300 ${iconClassName}`}>
                <ArrowRight />
              </p>
            </div>

            <h2 className="text-xl text-blue-900 font-bold pt-3">
              {data.service}
            </h2>

            <p className="text-sm text-blue-400 pb-2">{data.message}</p>

            <p className="text-sm text-gray-400">
              Tempo estimado ~ {data.estimated_time}
            </p>
          </button>
        );
      })}
    </div>
  );
}
