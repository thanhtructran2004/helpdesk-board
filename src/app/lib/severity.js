export const priorityOrder = { Low: 1, Medium: 2, High: 3, Critical: 4 };
export const statusOrder = { Open: 1, 'In Progress': 2, 'On Hold': 3, Resolved: 4 };

export const STATUSES = ['Open', 'In Progress', 'On Hold', 'Resolved'];
export const PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];

export function nextStatus(current) {
  const i = STATUSES.indexOf(current);
  return STATUSES[(i + 1) % STATUSES.length];
}

export function nextPriority(current) {
  const i = PRIORITIES.indexOf(current);
  return PRIORITIES[(i + 1) % PRIORITIES.length];
}
