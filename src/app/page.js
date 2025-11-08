import Board from './components/Board';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl p-6">
        <h1 className="text-3xl font-bold">Helpdesk Ticket Board</h1>
        <p className="text-sm text-slate-400 mt-2">
          Filter by status and priority, search by keyword, and add tickets to your queue.
        </p>
        <Board />
      </div>
    </main>
  );
}
