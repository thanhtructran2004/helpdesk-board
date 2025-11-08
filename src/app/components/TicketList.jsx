'use client';

import TicketCard from './TicketCard';

export default function TicketList({ tickets, queue, onAddToQueue }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">Tickets</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tickets.map(t => (
          <TicketCard
            key={t.id}
            ticket={t}
            inQueue={Boolean(queue[t.id])}
            onAdd={() => onAddToQueue(t.id)}
          />
        ))}
      </div>
    </div>
  );
}
