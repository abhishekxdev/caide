import NotificationCard from './NotificationCard.tsx';

const notifications = [
  { type: 'New Email', message: 'Re: Acme\'s LATAM expansion...', channel: 'Email' },
  { type: 'New Message', message: 'We\'d be interested in hearing mo...', channel: 'LinkedIn' },
  { type: 'Meeting Booked', message: 'Confirmed: Tuesday at 2PM with...', channel: 'Calendar' },
];

export default function NotificationStrip() {
  return (
    <div className="w-full border-t-2 border-b border-navy/10 bg-white overflow-x-auto">
      <div className="flex divide-x divide-gray-200 min-w-max md:min-w-0">
        {notifications.map((notif) => (
          <NotificationCard key={notif.type} {...notif} />
        ))}

        {/* Stat widget */}
        <div className="shrink-0 min-w-[120px] md:flex-1 px-6 py-5 bg-lavender/20 flex flex-col items-center justify-center text-center gap-1">
          <span className="font-heading font-800 text-4xl text-navy leading-none">127</span>
          <span className="font-body text-[13px] text-muted leading-tight">
            Leads engaged<br />this week
          </span>
        </div>
      </div>
    </div>
  );
}
