'use client';

import { useEffect, useMemo, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import StatusMessage from './StatusMessage';
import MyQueueSummary from './MyQueueSummary';
import { nextPriority, nextStatus } from '../lib/severity';

export default function Board() {
  // lifted state
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({}); // { [ticketId]: true }

  // useEffect #1 — fetch tickets
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Failed to load tickets');
        const data = await res.json();
        if (!cancelled) setTickets(data);
      } catch (e) {
        if (!cancelled) setError(e?.message ?? 'Unable to load tickets');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // useEffect #2 — live updates every 6–10s
  useEffect(() => {
    if (tickets.length === 0) return;
    const jitter = () => 6000 + Math.floor(Math.random() * 4000);
    let timerId = null;

    const tick = () => {
      setTickets(prev => {
        if (prev.length === 0) return prev;
        const idx = Math.floor(Math.random() * prev.length);
        const t = prev[idx];
        const changeStatus = Math.random() < 0.5;
        const updated = { ...t };
        if (changeStatus) updated.status = nextStatus(t.status);
        else updated.priority = nextPriority(t.priority);
        updated.updatedAt = new Date().toISOString();

        const next = [...prev];
        next[idx] = updated;
        return next;
      });
      timerId = setTimeout(tick, jitter());
    };

    timerId = setTimeout(tick, jitter());
    return () => { if (timerId) clearTimeout(timerId); };
  }, [tickets.length]);

  // controlled handlers
  const onStatusChange = v => setFilters(p => ({ ...p, status: v }));
  const onPriorityChange = v => setFilters(p => ({ ...p, priority: v }));
  const onSearchChange = v => setSearch(v);

  const onAddToQueue = id => setQueue(p => ({ ...p, [id]: true }));
  const onRemoveFromQueue = id => setQueue(p => {
    const n = { ...p }; delete n[id]; return n;
  });
  const onClearQueue = () => setQueue({});

  // derive visible tickets
  const visibleTickets = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tickets.filter(t => {
      const statusOk = filters.status === 'All' || t.status === filters.status;
      const priorityOk = filters.priority === 'All' || t.priority === filters.priority;
      const text = (t.title + ' ' + t.description).toLowerCase();
      const searchOk = q === '' || text.includes(q);
      return statusOk && priorityOk && searchOk;
    });
  }, [tickets, filters, search]);

  return (
  <section className="space-y-4 mt-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
      <StatusFilter value={filters.status} onChange={onStatusChange} />
      <PriorityFilter value={filters.priority} onChange={onPriorityChange} />
      <SearchBox value={search} onChange={onSearchChange} />
    </div>

    <StatusMessage
      loading={loading}
      error={error}
      isEmpty={!loading && visibleTickets.length === 0}
    />

    <TicketList
      tickets={visibleTickets}
      queue={queue}
      onAddToQueue={onAddToQueue}
    />

    <MyQueueSummary
      tickets={tickets}
      queue={queue}
      onRemove={onRemoveFromQueue}
      onClear={onClearQueue}
    />
  </section>
);
}

