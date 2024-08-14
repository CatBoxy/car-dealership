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
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (2015 + i).toString()
  );

  const [formState, setFormState] = useState({
    selectedModel: "",
    selectedYear: ""
  });

  const handleChange = (field: keyof typeof formState) => (value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.selectedModel && formState.selectedYear) {
      router.push(
        `/result/${formState.selectedModel}/${formState.selectedYear}`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select
        value={formState.selectedModel}
        onValueChange={handleChange("selectedModel")}
      >
        <SelectTrigger className="w-full bg-sky-50 border-2 border-sky-500">
          <SelectValue placeholder="Select a vehicle model" />
        </SelectTrigger>
        <SelectContent>
          {initialModels.map((model) => (
            <SelectItem
              key={model.MakeId}
              value={model.MakeId.toString()}
              className="text-sky-700"
            >
              {model.MakeName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={formState.selectedYear}
        onValueChange={handleChange("selectedYear")}
      >
        <SelectTrigger className="w-full bg-sky-50 border-2 border-sky-500">
          <SelectValue placeholder="Select a year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year} className="text-sky-700">
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        className="bg-sky-50 hover:bg-sky-100 border border-slate-300 text-slate-700 font-medium px-4 py-2 rounded-md transition-colors duration-300"
        type="submit"
        disabled={!formState.selectedModel || !formState.selectedYear}
      >
        Next
      </Button>
    </form>
  );
}
