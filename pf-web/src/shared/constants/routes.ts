
export const routes = {
  checkIn: {
    path: "/",
    label: "Totem",
    logoLabel: "Totem de emissão"
  },
  validate: {
    path: "/validate",
    label: "Validação",
    logoLabel: "Teminal de check-in"
  },
  panel: {
    path: "/panel",
    label: "Painel",
    logoLabel: "Sala de espera"
  },
  attendance: {
    path: "/attendance",
    label: "Atendimento",
    logoLabel: "PF - Patient Flow"
  },
} as const;
