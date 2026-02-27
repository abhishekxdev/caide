import NotificationCard from './NotificationCard.tsx';

const notifications = [
  { type: 'Post Published', message: 'Your LinkedIn article hit 2.1k views today...', channel: 'LinkedIn' },
  { type: 'Trending', message: 'X thread on "AI Tools" is going viral — 840 reposts...', channel: 'X' },
  { type: 'Queue Ready', message: '5 Threads posts scheduled for next 7 days...', channel: 'Scheduled' },
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
          <span className="font-heading font-800 text-4xl text-navy leading-none">2,400+</span>
          <span className="font-body text-[13px] text-muted leading-tight">
            Posts published<br />by creators today
          </span>
        </div>
      </div>
    </div>
  );
}
