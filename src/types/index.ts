export type VehicleResult = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type VehicleResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleResult[];
};
