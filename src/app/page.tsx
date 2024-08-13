import { Suspense } from "react";
import FilterForm from "../components/FilterForm";
import { getModels } from "../lib/api";

export default async function Filter() {
  const { Results } = await getModels();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <FilterForm initialModels={Results} />
      </Suspense>
    </main>
  );
}
