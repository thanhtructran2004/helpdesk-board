'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-slate-200">Search</span>
      <input
        className="mt-1 w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-slate-100
                   placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search title or description"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
