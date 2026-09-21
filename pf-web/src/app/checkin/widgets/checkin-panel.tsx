import { useState } from "react";

import CheckInCard from "./checkin-card";
import CheckinModal from "./checkin-modal";
import CheckinTitle from "./checkin-title";

import type { ICheckin } from "../interfaces/icheckin";
import CheckInService from "../services/checkin-service";
import type { TPriority } from "../types/tpriority";

import Spinner from "@/shared/ui/spinner";
import Panel from "@/shared/ui/panel";

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
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Panel>
      <CheckinTitle />

      <CheckInCard onClick={handleCardClick} />

      {loading && <Spinner />}

      {checkin && showModal && (
        <CheckinModal checkin={checkin} setShowModal={setShowModal} />
      )}
    </Panel>
  );
}
