import { getModels, getModelsByMakeAndYear } from "@/lib/api";

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
  const data = await getModelsByMakeAndYear(makeId, year);

  return (
    <div>
      <h1>Result Page</h1>
      <p>Make ID: {makeId}</p>
      <p>Year: {year}</p>
    </div>
  );
}
