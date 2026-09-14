import { ArrowRight } from "lucide-react";

import { CheckInPanelCards } from "../mock/checkin-panel-cards";
import type { TPriority } from "../types/tpriority";

interface ICheckInCard {
  onClick: (priority: TPriority) => Promise<void>;
}

export default function CheckInCard({ onClick }: ICheckInCard) {
  const iconClassName = `
    flex
    w-12 h-12
    rounded-full
    items-center justify-center
  `;

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
      {CheckInPanelCards.map((card) => {
        const Icon = card.icon;

        return (
          <button
            key={card.service}
            onClick={() => onClick(card.priority)}
            className={`
              grid h-64 w-full
              border rounded-3xl
              pt-6 pb-5 px-4 text-left
              transition-transform duration-200
              hover:scale-[1.01] hover:shadow-lg hover:cursor-pointer
              ${card.colors.borderColor}
              ${card.colors.cardBackground}
              ${card.colors.hoverBorder}
            `}
          >
            <div className="flex justify-between">
              <p className={`${iconClassName} ${card.colors.iconBackground}`}>
                <Icon className={`${card.colors.icon}`} size={18} />
              </p>

              <p className={`text-gray-300 ${iconClassName}`}>
                <ArrowRight />
              </p>
            </div>

            <h2 className="text-xl text-blue-900 font-bold pt-3">
              {card.service}
            </h2>

            <p className="text-sm text-blue-400 pb-2">{card.message}</p>

            <p className="text-sm text-gray-400">
              Tempo estimado ~ {card.estimated_time}
            </p>
          </button>
        );
      })}
    </div>
  );
}
