import Panel from "@/shared/ui/panel";
import { Dot } from "lucide-react";

export default function CurrentAttendancePanel() {
  return (
    <div className="lg:col-span-2">
      <Panel>
        <h1 className="text-blue-900 text-3xl font-bold">Chamada atual</h1>

        <div className="my-5 p-10 bg-brand/15 rounded-2xl ">
          <div className="flex justify-between items-center">
            <h2 className="uppercase text-gray-500 tracking-widest text-lg">Senha chamada</h2>

            <p
              className={`
                flex items-center
                text-sm pr-3
                rounded-full
                bg-[#CDE3EC] text-[#007A55]
              `}
            >
              <Dot size={30} />
              <span>há 15min</span>
            </p>
          </div>

          <div className="text-blue-900 font-bold text-9xl py-5">B034</div>

          <div className="text-2xl my-5 text-brand/90">
            Dirija-se ao atendimento
          </div>

          <div className="flex gap-5 items-center">
            <p className="text-white py-3 px-4 bg-brand/90 rounded-2xl font-bold text-2xl">
              Guichê 02
            </p>
            <p className="text-gray-400 text-lg">Atendimento prioritário</p>
          </div>
        </div>
      </Panel>
    </div>
  );
}
