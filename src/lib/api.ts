import { ModelYearResponse, VehicleResponse } from "@/types";

const BASE_URL = process.env.API_BASE_URL!;

export async function getModels(): Promise<VehicleResponse> {
  const response = await fetch(
    `${BASE_URL}/api/vehicles/GetMakesForVehicleType/car?format=json`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch models");
  }
  return response.json();
}

export async function getModelsByMakeAndYear(
  makeId: string,
  year: string
): Promise<ModelYearResponse> {
  const response = await fetch(
    `${BASE_URL}/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to fetch models for make and year");
  }
  return response.json();
}
