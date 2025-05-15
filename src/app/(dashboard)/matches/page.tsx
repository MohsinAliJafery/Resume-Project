import { CandidateMatchTable } from "@/components/CandidateMatchTable";

export default function MatchesPage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Matches</h1>
      <CandidateMatchTable />
    </main>
  );
}
