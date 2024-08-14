import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";

interface VehicleCardProps {
  modelName: string;
  makeName: string;
  year: string;
}

export default function VehicleCard({
  modelName,
  makeName,
  year
}: VehicleCardProps) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow duration-300 bg-sky-50 border-2 border-sky-500">
      <CardHeader className="mb-4">
        <div className="bg-gradient-to-r from-sky-300 to-sky-700 bg-clip-text text-transparent font-bold text-3xl">
          Vehicle Details
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 w-full items-center gap-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="name" className="text-sky-700">
              Make Name
            </Label>
            <div className="text-sky-700">{modelName}</div>
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="model" className="text-sky-700">
              Model
            </Label>
            <div className="text-sky-700">{makeName}</div>
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="year" className="text-sky-700">
              Year
            </Label>
            <div className="text-sky-700">{year}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
