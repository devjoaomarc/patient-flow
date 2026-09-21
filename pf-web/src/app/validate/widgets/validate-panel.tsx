import ValidateTitle from "./validate-title";
import ValdiateQRCode from "./valdiate-qrcode";
import ValidatePass from "./validate-pass";

import Panel from "@/shared/ui/panel";

export default function ValidatePanel() {
  return (
    <Panel compact>
      <ValidateTitle />

      <ValdiateQRCode />

      <ValidatePass />
    </Panel>
  );
}
