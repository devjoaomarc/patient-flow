import api from "@/shared/providers/api";
import type { TPriority } from "../types/tpriority";

export default function CheckInService() {
  async function createCheckIn(priority: TPriority) {
    try {
      const response = await api.post("/checkin", { priority });

      return JSON.stringify(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    createCheckIn,
  };
}
