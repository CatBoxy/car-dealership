import SearchResults from "@/components/SearchResults";
import { getModels, getModelsByMakeAndYear } from "@/lib/api";
import { Suspense } from "react";

export async function generateStaticParams() {
  const models = await getModels();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (2015 + i).toString()
  );

  const params = [];

  for (const make of models.Results) {
    for (const year of years) {
      params.push({ makeId: make.MakeId.toString(), year });
    }
  }

  return params;
}

export default async function ResultPage({
  params: { makeId, year }
}: {
  params: { makeId: string; year: string };
}) {
  const { Results } = await getModelsByMakeAndYear(makeId, year);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Result Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults initialModels={Results} />
      </Suspense>
    </main>
  );
}
