interface NotificationCardProps {
  type: string;
  message: string;
  channel: string;
  channelColor?: string;
}

const channelColors: Record<string, string> = {
  Email: 'bg-blue-100 text-blue-700',
  LinkedIn: 'bg-sky-100 text-sky-700',
  Calendar: 'bg-green-100 text-green-700',
};

export default function NotificationCard({ type, message, channel }: NotificationCardProps) {
  return (
    <div className="flex-1 border-r border-gray-200 last:border-r-0 px-6 py-5 hover:bg-gray-50 transition-colors duration-150 group">
      {/* Header row */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          {/* Icon circle */}
          <div className="w-5 h-5 rounded-full bg-lavender-dark flex items-center justify-center shrink-0">
            <div className="w-2 h-2 rounded-full bg-navy" />
          </div>
          <span className="font-body font-semibold text-[10px] tracking-widest uppercase text-muted">
            {type}
          </span>
        </div>
        <span className="font-body text-[11px] text-muted/70">Now</span>
      </div>

      {/* Message */}
      <p className="font-heading font-700 text-[15px] text-navy mb-1.5 leading-snug">
        {message}
      </p>
      <p className="font-body text-[12px] text-muted mb-3">99+ more notifications</p>

      {/* Channel pill */}
      <span
        className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full font-body ${channelColors[channel] ?? 'bg-gray-100 text-gray-600'}`}
      >
        {channel}
      </span>
    </div>
  );
}
