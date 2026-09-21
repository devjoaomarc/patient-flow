import type { ReactNode } from "react";

interface IPanelProps {
  children: ReactNode;
  compact?: boolean;
}

export default function Panel({ children, compact }: IPanelProps) {
  return (
    <section className="py-10">
      <div
        className={`
          p-5 md:p-10
          rounded-4xl
          border border-gray-200
          bg-white
          ${compact ? "max-w-3xl mx-auto" : ""}
        `}
      >
        {children}
      </div>
    </section>
  );
}
