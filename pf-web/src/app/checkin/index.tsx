import CheckInPanel from "./widgets/checkin-panel";
import CheckinTitle from "./widgets/checkin-title";

export default function CheckInPage() {
  return (
    <section className="py-10">
      <div className="mx-10 py-10 px-8 rounded-4xl bg-white">
        <CheckinTitle />

        <CheckInPanel />
      </div>
    </section>
  );
}
