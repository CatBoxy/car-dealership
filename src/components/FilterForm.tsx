"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { VehicleResult } from "@/types";

interface HomeFormProps {
  initialModels: VehicleResult[];
}

export default function HomeForm({ initialModels }: HomeFormProps) {
  const router = useRouter();
  const [models, setModels] = useState(initialModels);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (2015 + i).toString()
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedModel && selectedYear) {
      router.push(`/result/${selectedModel}/${selectedYear}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select value={selectedModel} onValueChange={setSelectedModel}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a vehicle model" />
        </SelectTrigger>
        <SelectContent>
          {models.map((model) => (
            <SelectItem key={model.MakeId} value={model.MakeId.toString()}>
              {model.MakeName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedYear} onValueChange={setSelectedYear}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit" disabled={!selectedModel || !selectedYear}>
        Next
      </Button>
    </form>
  );
}
