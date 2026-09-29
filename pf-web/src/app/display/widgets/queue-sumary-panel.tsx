import type { TPriority } from "@/app/checkin/types/tpriority";
import { useQueueSummary } from "../hooks/use-queue-summary";

import Panel from "@/shared/ui/panel";

export default function QueueSumaryPanel() {
  const { tickets } = useQueueSummary();

  const PRIORITY_COLORS: Record<TPriority, string> = {
    NORMAL: "bg-blue-200 text-blue-600",
    PRIORITY: "bg-red-200 text-red-500",
    AGE_80_PLUS: "bg-amber-300 text-amber-600",
  };

  return (
    <div className="col-span-1">
      <Panel compact>
        <div>
          <h2 className="text-blue-900 text-lg font-bold">Últimas chamadas</h2>

          <div className="bg-brand/15 rounded-2xl flex justify-between py-2 px-3 items-center my-5">
            <span className="text-2xl text-blue-900 font-bold">P080 </span>
            <span className="text-gray-400 text-sm font-light">
              Chamado há 38min
            </span>
            <p className="text-blue-900 text-sm">Guichê 04</p>
          </div>
        </div>

        <div>
          <h2 className="text-blue-900 text-lg font-bold">Próximas senhas</h2>

          <div className="flex flex-wrap gap-5 mt-5">
            {tickets.map((ticket) => (
              <span
                key={ticket.code}
                className={`
                  rounded-2xl px-3 py-2 text-lg font-bold
                  ${PRIORITY_COLORS[ticket.priority]}
                `}
              >
                {ticket.code}
              </span>
            ))}
          </div>
        </div>
      </Panel>
    </div>
  );
}
