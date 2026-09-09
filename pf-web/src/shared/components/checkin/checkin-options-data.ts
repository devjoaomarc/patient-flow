import {
  Accessibility,
  HeartPulse,
  Users,
  type LucideIcon,
} from "lucide-react";

interface ICheckInOptionsData {
  icon: LucideIcon;
  service: string;
  message: string;
  estimated_time: string;
  colors: {
    borderColor: string;
    icon: string;
    iconBackground: string;
    hoverBorder: string;
    cardBackground: string;
  };
}

export const CheckInOptionsData: ICheckInOptionsData[] = [
  {
    icon: Users,
    service: "Atendimento Normal",
    message: "Atendimento por ordem de chegada",
    estimated_time: "18min",
    colors: {
      borderColor: "border-gray-300",
      icon: "text-blue-600",
      iconBackground: "bg-blue-100",
      hoverBorder: "hover:border-blue-200",
      cardBackground: "bg-white",
    },
  },
  {
    icon: HeartPulse,
    service: "Atendimento Prioritário",
    message: "Para pacientes com prioridade de atendimento",
    estimated_time: "10min",
    colors: {
      borderColor: "border-red-100",
      icon: "text-red-600",
      iconBackground: "bg-red-200",
      hoverBorder: "hover:border-red-200",
      cardBackground: "bg-red-100/50",
    },
  },
  {
    icon: Accessibility,
    service: "Atendimento 80+",
    message: "Prioridade para pacientes com 80 anos ou mais",
    estimated_time: "5min",
    colors: {
      borderColor: "border-orange-100",
      icon: "text-orange-600",
      iconBackground: "bg-orange-200",
      hoverBorder: "hover:border-orange-200",
      cardBackground: "bg-orange-100/50",
    },
  },
];
