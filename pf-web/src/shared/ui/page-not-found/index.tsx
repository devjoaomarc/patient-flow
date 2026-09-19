import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold text-brand">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Página não encontrada
      </h2>

      <p className="mt-2 text-gray-400">
        A página que você está procurando não existe.
      </p>

      <Link
        to="/"
        className="
          mt-6
          flex items-center gap-2
          rounded-2xl
          bg-brand
          px-5 py-3
          text-white
          transition
          hover:opacity-90
        "
      >
        <Home size={20} />
        Voltar para o início
      </Link>
    </div>
  );
}
