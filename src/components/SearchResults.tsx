import { ModelYearResult } from "@/types";
import React from "react";
import VehicleCard from "./VehicleCard";

interface SearchResultsProps {
  initialModels: ModelYearResult[];
  year: string;
}

export default function SearchResults({
  initialModels,
  year
}: SearchResultsProps) {
  return (
    <div className="space-y-4">
      {initialModels.map((model) => (
        <VehicleCard
          key={model.Make_ID}
          modelName={model.Model_Name}
          makeName={model.Make_Name}
          year={year}
        />
      ))}
    </div>
  );
}
