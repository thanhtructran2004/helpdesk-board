export async function GET() {
  const tickets = [
    {
      id: 'tk-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors when working remotely.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 'tk-1002',
      title: 'Email not syncing on iOS',
      description: 'Exchange account not syncing on iPhone; user can only receive emails on desktop.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Alex Nguyen',
      updatedAt: '2025-10-30T09:30:00Z'
    },
    {
      id: 'tk-1003',
      title: 'Laptop battery drains quickly',
      description: 'Device loses 80% battery within 2 hours of light use.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-29T11:45:00Z'
    },
    {
      id: 'tk-1004',
      title: 'Printer offline for Accounting department',
      description: 'Shared printer HP-LaserJet-402 not responding to network print jobs.',
      priority: 'Medium',
      status: 'On Hold',
      assignee: 'Chris Park',
      updatedAt: '2025-10-29T16:45:00Z'
    },
    {
      id: 'tk-1005',
      title: 'Okta MFA prompts repeatedly',
      description: 'Okta authentication requires MFA for every login despite trusted device setup.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T12:10:00Z'
    },
    {
      id: 'tk-1006',
      title: 'Teams screen share fails intermittently',
      description: 'Screen sharing stops immediately after being started in Teams meetings.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Jamie Lee',
      updatedAt: '2025-10-28T15:55:00Z'
    },
    {
      id: 'tk-1007',
      title: 'New hire onboarding: account setup',
      description: 'Provision AD, email, and Slack for new hire John Taylor.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Service Desk',
      updatedAt: '2025-10-27T10:00:00Z'
    },
    {
      id: 'tk-1008',
      title: 'Zoom mic not detected',
      description: 'Built-in microphone not recognized in Zoom calls on macOS.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T08:05:00Z'
    },
    {
      id: 'tk-1009',
      title: 'Wi-Fi dead zone near conference room 3B',
      description: 'Multiple users report frequent disconnections near Room 3B.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Network Team',
      updatedAt: '2025-10-31T11:40:00Z'
    },
    {
      id: 'tk-1010',
      title: 'Password reset request',
      description: 'Employee forgot password after returning from leave; requires reset.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Service Desk',
      updatedAt: '2025-10-26T09:00:00Z'
    },
    {
      id: 'tk-1011',
      title: 'Shared drive permission issue',
      description: 'Marketing cannot access campaign assets folder in Q4 drive.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'IT Ops',
      updatedAt: '2025-10-30T18:25:00Z'
    },
    {
      id: 'tk-1012',
      title: 'Outlook search not returning results',
      description: 'Instant search broken after Office 365 update.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-29T14:00:00Z'
    },
    {
      id: 'tk-1013',
      title: 'Monitor flickers at high refresh rate',
      description: 'DisplayPort connection causes flicker above 120Hz on Dell monitor.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-27T17:35:00Z'
    },
    {
      id: 'tk-1014',
      title: 'API latency degradation in production',
      description: 'Average API response time exceeds 1.2s since morning deployment.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'SRE',
      updatedAt: '2025-10-31T14:20:00Z'
    },
    {
      id: 'tk-1015',
      title: 'BitLocker recovery key request',
      description: 'User locked out after BIOS update; needs recovery key retrieval.',
      priority: 'High',
      status: 'Resolved',
      assignee: 'Security',
      updatedAt: '2025-10-31T07:50:00Z'
    }
  ];

  return Response.json(tickets);
}
