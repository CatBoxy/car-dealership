import SearchResults from "@/components/SearchResults";
import { Skeleton } from "@/components/ui/skeleton";
import { getModels, getModelsByMakeAndYear } from "@/lib/api";
import Link from "next/link";
import { Suspense } from "react";
import { Home } from "lucide-react";

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
    <div className="container mx-auto p-4 max-w-[600px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Results Page</h1>
        <Link href="/" className="hover:pointer">
          <Home size={24} />
        </Link>
      </div>
      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchResults initialModels={Results} year={year} />
      </Suspense>
    </div>
  );
}

function SearchResultsSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, index) => (
        <Skeleton key={index} className="h-32 w-full" />
      ))}
    </div>
  );
}
