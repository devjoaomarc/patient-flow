import api from "@/shared/providers/api";

export default function ValidateService() {
  async function validate(code: string) {
    try {
      const response = await api.patch("/checkin/validate", { code });

      return JSON.stringify(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    validate,
  };
}
