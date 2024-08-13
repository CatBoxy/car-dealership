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

export type ModelYearResult = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export type ModelYearResponse = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: ModelYearResult[];
};
