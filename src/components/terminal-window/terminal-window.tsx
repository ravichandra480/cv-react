import { ReactNode, CSSProperties } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Skip default padding so callers can control padding per-section */
  noPadding?: boolean;
}

function TerminalWindow({ title = '~', children, className = '', style, noPadding = false }: Props) {
  return (
    <div
      className={`rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-md dark:shadow-black/50 transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 ${className}`}
      style={style}
    >
      {/* Chrome title bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <span className="w-3 h-3 rounded-full bg-term-red" />
        <span className="w-3 h-3 rounded-full bg-term-yellow" />
        <span className="w-3 h-3 rounded-full bg-term-green" />
        <span className="ml-3 text-xs text-gray-400 dark:text-gray-500 font-mono tracking-tight truncate">
          {title}
        </span>
      </div>
      <div className={noPadding ? '' : 'p-6'}>{children}</div>
    </div>
  );
}

export default TerminalWindow;
