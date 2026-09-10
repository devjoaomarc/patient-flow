import api from "@/shared/providers/api";

export default function CheckInService() {
  async function createCheckIn() {
    try {
      const response = await api.get("/checkin");

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    createCheckIn,
  };
}
