import type { LucideIcon } from "lucide-react";

import type { TPriority } from "../types/tpriority";

export interface ICheckInPanelCards {
  icon: LucideIcon;
  service: string;
  message: string;
  priority: TPriority;
  estimated_time: string;
  colors: {
    borderColor: string;
    icon: string;
    iconBackground: string;
    hoverBorder: string;
    cardBackground: string;
  };
}
