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
    <Card className="p-4">
      <CardHeader className="mb-4">
        <CardTitle>Vehicle Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 w-full items-center gap-2">
          <div className="flex flex-col space-y-1">
            <Label htmlFor="name">Make Name</Label>
            <div>{modelName}</div>
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="model">Model</Label>
            <div>{makeName}</div>
          </div>
          <div className="flex flex-col space-y-1">
            <Label htmlFor="year">Year</Label>
            <div>{year}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
