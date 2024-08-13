import { VehicleResponse } from "@/types";

export async function getModels(): Promise<VehicleResponse> {
  const response = await fetch(process.env.API_URL!);
  if (!response.ok) {
    throw new Error("Failed to fetch models");
  }
  return response.json();
}
