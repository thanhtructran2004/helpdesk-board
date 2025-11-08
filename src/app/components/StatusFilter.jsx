'use client';

const STATUSES = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

export default function StatusFilter({ value, onChange }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-slate-200">Status</span>
      <select
        className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-slate-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    </label>
  );
}
