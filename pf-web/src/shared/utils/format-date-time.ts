export default function formatDateTime(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
  });
}
