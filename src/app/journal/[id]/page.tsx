interface JournalEntryPageProps {
  params: {
    id: string;
  };
}

export default function JournalEntryPage({ params }: JournalEntryPageProps) {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Journal Entry</h1>
      <p className="text-gray-600">
        Journal entry {params.id} page coming soon...
      </p>
    </div>
  );
}
