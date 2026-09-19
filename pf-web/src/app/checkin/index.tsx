import CheckInPanel from "./widgets/checkin-panel";
import CheckinTitle from "./widgets/checkin-title";

export default function CheckInPage() {
  return (
    <section className="py-10">
      <div className="p-10 rounded-4xl bg-white">
        <CheckinTitle />

        <CheckInPanel />
      </div>
    </section>
  );
}
