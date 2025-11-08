'use client';

export default function TicketCard({ ticket, inQueue, onAdd }) {
  const { title, priority, status, assignee, updatedAt, description } = ticket;

  return (
    <article className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 shadow
                        ring-1 ring-slate-800">
      {/* header meta lines to match screenshot */}
      <p className="text-xs text-slate-300">
        <span className="font-semibold">Priority:</span> {priority}
      </p>
      <p className="text-xs text-slate-300 mb-2">
        <span className="font-semibold">Status:</span> {status}
      </p>

      <h3 className="font-semibold text-slate-100">{title}</h3>
      <p className="text-sm text-slate-400 mt-1">{description}</p>

      <div className="text-xs text-slate-400 space-y-1 mt-3">
        <p><span className="text-slate-500">Assignee:</span> {assignee}</p>
        <p>
          <span className="text-slate-500">Updated:</span>{' '}
          {new Date(updatedAt).toLocaleString()}
        </p>
      </div>

      <button
        className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-medium text-white
                   hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600
                   border border-blue-500"
        onClick={onAdd}
        disabled={inQueue}
        title={inQueue ? 'Already in queue' : 'Add to My Queue'}
      >
        {inQueue ? 'Already in My Queue' : 'Add to My Queue'}
      </button>
    </article>
  );
}
