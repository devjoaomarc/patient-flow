import type { TCheckInStatus } from "../types/tcheckin-status";
import type { TPriority } from "../types/tpriority";

export interface ICheckin {
  code: string;
  priority: TPriority;
  status: TCheckInStatus;
  validationToken: string;
  createdAt: string;
  expiresAt: string;
}
