import CurrentAttendancePanel from "./current-attendance-panel";
import QueueSumaryPanel from "./queue-sumary-panel";

export default function DisplayPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <CurrentAttendancePanel />

      <QueueSumaryPanel />
    </div>
  );
}
