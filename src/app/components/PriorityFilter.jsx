'use client';

const PRIORITIES = ['All', 'Low', 'Medium', 'High', 'Critical'];

export default function PriorityFilter({ value, onChange }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-slate-200">Priority</span>
      <select
        className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-slate-100
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {PRIORITIES.map(p => <option key={p} value={p}>{p}</option>)}
      </select>
    </label>
  );
}
