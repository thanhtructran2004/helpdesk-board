'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) return <p className="mt-4 italic text-slate-400">Loading…</p>;
  if (error) return <p className="mt-4 text-red-400">Unable to load tickets.</p>;
  if (isEmpty) return <p className="mt-4 italic text-slate-400">No tickets match your filters.</p>;
  return null;
}
