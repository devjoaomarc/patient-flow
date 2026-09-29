import api from "@/shared/providers/api";

import type { IWaitingTicket } from "../interfaces/iwaiting-ticket";

export default function DisplayService() {
  async function waiting() {
    try {
      const { data } = await api.get<IWaitingTicket[]>("/queue/waiting");

      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  return {
    waiting,
  };
}
