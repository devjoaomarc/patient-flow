import type { SubmitEvent } from "react";

import ValidateService from "../services/validate-service";

export default function ValidatePass() {
  const validateService = ValidateService();

  async function handleValidatePass(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const code = formData.get("checkin-code")?.toString().toUpperCase();

    if (!code) return;

    try {
      const validate = await validateService.validate(code);

      alert(validate)

      return validate;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleValidatePass}
      className={`
        grid md:grid-cols-3 min-w-0 gap-5
      `}
    >
      <div className="grid min-w-0 md:col-span-2 gap-2">
        <label htmlFor="checkin-code" className="text-blue-900">
          Digite o código da senha
        </label>

        <input
          required
          type="text"
          name="checkin-code"
          id="checkin-code"
          minLength={4}
          maxLength={4}
          pattern="[AaNnPp][0-9]{3}"
          placeholder="A051"
          className={`
            p-4 rounded-3xl min-w-0 uppercase
            border border-gray-200 bg-white
            text-2xl font-semibold tracking-widest
            placeholder:text-2xl placeholder:text-gray-300
          `}
        />
      </div>

      <button
        type="submit"
        className={`
          w-full p-5
          rounded-3xl
          bg-brand/50
          text-white text-lg
          self-end
          transition-transform duration-200
          hover:scale-[1.01] hover:shadow-lg hover:cursor-pointer
        `}
      >
        Validar atendimento
      </button>
    </form>
  );
}
