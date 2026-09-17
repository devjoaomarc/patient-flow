import { useState } from "react";

import CheckInCard from "./checkin-card";

import CheckInService from "../services/checkin-service";
import type { TPriority } from "../types/tpriority";

import Spinner from "@/shared/ui/spinner";
import CheckinModal from "./checkin-modal";
import type { ICheckin } from "../interfaces/icheckin";

export default function CheckInPanel() {
  const checkInService = CheckInService();

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [checkin, setCheckin] = useState<ICheckin>();

  async function handleCardClick(priority: TPriority) {
    try {
      setLoading(true);

      const result = await checkInService.createCheckIn(priority);

      setCheckin(result);

      return setShowModal(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading && <Spinner />}

      <CheckInCard onClick={handleCardClick} />

      {checkin && showModal && (
        <CheckinModal checkin={checkin} setShowModal={setShowModal} />
      )}
    </div>
  );
}
