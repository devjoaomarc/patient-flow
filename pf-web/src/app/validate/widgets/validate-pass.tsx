export default function ValidatePass() {
  function handleValidatePass() {
    console.log("hi");
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
          type="text"
          name="checkin-code"
          id="checkin-code"
          placeholder="A051"
          className={`
            p-4 rounded-3xl min-w-0
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
        `}
      >
        Validar atendimento
      </button>
    </form>
  );
}
