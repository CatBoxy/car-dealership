import { Suspense } from "react";
import FilterForm from "../components/FilterForm";
import { getModels } from "../lib/api";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Filter() {
  const { Results } = await getModels();

  return (
    <div className="container mx-auto p-4 max-w-[600px]">
      <h1 className="text-2xl font-bold mb-4 text-sky-700">Home</h1>
      <h3 className="mb-2 text-sky-700">
        Please select a vehicle model and year
      </h3>
      <Suspense fallback={<FilterFormSkeleton />}>
        <FilterForm initialModels={Results} />
      </Suspense>
    </div>
  );
}

function FilterFormSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-32" />
    </div>
  );
}
