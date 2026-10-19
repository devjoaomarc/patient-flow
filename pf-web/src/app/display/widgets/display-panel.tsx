import CurrentAttendancePanel from "./current-attendance-panel";
import QueueSumaryPanel from "./queue-sumary-panel";

export default function DisplayPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CurrentAttendancePanel />

      <QueueSumaryPanel />
    </div>
  );
}
