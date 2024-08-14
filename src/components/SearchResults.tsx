import { ModelYearResult } from "@/types";
import React from "react";
import VehicleCard from "./VehicleCard";

interface SearchResultsProps {
  initialModels: ModelYearResult[];
}

export default function SearchResults({ initialModels }: SearchResultsProps) {
  return (
    <div>
      {initialModels.map((model) => (
        <VehicleCard key={model.Make_ID} something={"asd"} />
      ))}
    </div>
  );
}
