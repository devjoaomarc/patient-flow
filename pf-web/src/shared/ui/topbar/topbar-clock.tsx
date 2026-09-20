import { useNow } from "@/shared/hooks/use-now";

export default function TopbarClock() {
  const now = useNow();

  const today = now.toLocaleDateString("pt-BR");

  const hourNow = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="text-right leading-tight">
      <p className="text-blue-900">{today}</p>
      <p className="text-gray-400">{hourNow}</p>
    </div>
  );
}
