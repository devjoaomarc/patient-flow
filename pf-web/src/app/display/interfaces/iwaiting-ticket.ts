import type { TPriority } from "@/app/checkin/types/tpriority";

export interface IWaitingTicket {
  code: string;
  priority: TPriority;
}
