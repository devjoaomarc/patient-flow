import CheckInOptions from "../../shared/components/checkin/checkin-options";
import CheckinTitle from "../../shared/components/checkin/checkin-title";

export default function CheckInPage() {
  return (
    <section className="py-10">
      <div className="mx-10 py-10 px-8 rounded-4xl bg-white">
        <CheckinTitle />

        <CheckInOptions />
      </div>
    </section>
  );
}
