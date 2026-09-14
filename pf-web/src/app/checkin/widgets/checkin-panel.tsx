import { useState } from "react";

import CheckInCard from "./checkin-card";

import CheckInService from "../services/checkin-service";
import type { TPriority } from "../types/tpriority";

import Spinner from "@/shared/ui/spinner";

export default function CheckInPanel() {
  const checkInService = CheckInService();

  const [loading, setLoading] = useState(false);

  async function handleCardClick(priority: TPriority) {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 5000));

      const result = await checkInService.createCheckIn(priority);

      return alert(result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading && <Spinner />}

      <CheckInCard onClick={handleCardClick} />
    </div>
  );
}
