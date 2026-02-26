import NotificationCard from './NotificationCard.tsx';

const notifications = [
  { type: 'Walk Completed', message: 'Max completed his 30-min walk...', channel: 'Walks' },
  { type: 'Vet Appointment', message: 'Annual check-up confirmed for Thu...', channel: 'Health' },
  { type: 'New Walker', message: 'Sarah rated ⭐⭐⭐⭐⭐ for Bella...', channel: 'Care' },
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
            Happy pups<br />cared for today
          </span>
        </div>
      </div>
    </div>
  );
}
