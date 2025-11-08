'use client';

export default function MyQueueSummary({ tickets, queue, onRemove, onClear }) {
  const queuedIds = Object.keys(queue);
  const queued = tickets.filter(t => queue[t.id]);

  return (
    <aside className="mt-6 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-semibold text-slate-100">My Queue</h2>
        <span className="text-sm text-slate-400">{queuedIds.length} selected</span>
      </div>

      {queued.length === 0 ? (
        <p className="text-sm text-slate-400">No tickets in your queue.</p>
      ) : (
        <ul className="space-y-2">
          {queued.map(t => (
            <li key={t.id} className="flex items-center justify-between text-sm">
              <span className="text-slate-200">{t.title}</span>
              <button
                className="text-blue-400 hover:text-blue-300 underline"
                onClick={() => onRemove(t.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3">
        <button
          className="text-sm text-blue-400 underline hover:text-blue-300"
          onClick={onClear}
        >
          Clear Queue
        </button>
      </div>
    </aside>
  );
}
