import { useEffect, useState } from "react";

import type { IWaitingTicket } from "../interfaces/iwaiting-ticket";
import DisplayService from "../services/display-service";

import { useSocket } from "@/shared/hooks/use-socket";

export function useQueueSummary() {
  const [tickets, setTickets] = useState<IWaitingTicket[]>([]);

  const { waiting } = DisplayService();

  useEffect(() => {
    async function loadWaitingTickets() {
      const tickets = await waiting();

      setTickets(tickets);
    }

    loadWaitingTickets();
  }, []);

  useSocket<IWaitingTicket>("ticket.validated", async () => {
    const tickets = await waiting();

    setTickets(tickets);
  });

  return {
    tickets,
  };
}
