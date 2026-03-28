import { useState, useEffect } from 'react';
import me from '../../images/me_1.jpg';
import TerminalWindow from '../../components/terminal-window/terminal-window';

type LineKind = 'cmd' | 'out';
interface TermLine { type: LineKind; text: string; active?: boolean; }

const SEQUENCE: { type: LineKind; text: string }[] = [
{ type: 'cmd', text: 'whoami' },
{ type: 'out', text: 'Ravi Chandra Ravulapati' },
{ type: 'cmd', text: 'cat role.txt' },
{ type: 'out', text: 'Lead Engineer  ·  VP @ Morgan Stanley' },
{ type: 'cmd', text: 'cat stack.txt' },
{ type: 'out', text: 'React  ·  Angular  ·  TypeScript  ·  AI Agents ·  Java' },
{ type: 'cmd', text: 'cat location.txt' },
{ type: 'out', text: 'London, UK  ·  15+ years experience' },
];

function useTerminalTyper() {
const [lines, setLines] = useState<TermLine[]>([]);
const [done, setDone] = useState(false);

useEffect(() => {
let cancelled = false;
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

async function run() {
await sleep(500);
for (const entry of SEQUENCE) {
if (cancelled) return;
if (entry.type === 'cmd') {
setLines(prev => [...prev, { type: 'cmd', text: '', active: true }]);
for (let i = 1; i <= entry.text.length; i++) {
if (cancelled) return;
await sleep(52);
setLines(prev =>
prev.map((l, idx) => idx === prev.length - 1 ? { ...l, text: entry.text.slice(0, i) } : l)
);
}
setLines(prev =>
prev.map((l, idx) => idx === prev.length - 1 ? { ...l, active: false } : l)
);
await sleep(260);
} else {
await sleep(90);
if (!cancelled) setLines(prev => [...prev, { type: 'out', text: entry.text }]);
await sleep(180);
}
}
if (!cancelled) setDone(true);
}

run();
return () => { cancelled = true; };
}, []);

return { lines, done };
}

function Hero() {
const { lines, done } = useTerminalTyper();

return (
<section className="pt-32 pb-20 md:pt-40 md:pb-28" id="home">
<div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-start">

{/* Main terminal window */}
<TerminalWindow title="~/portfolio — bash" noPadding>
{/* Typewriter output */}
<div className="p-6 min-h-[230px] font-mono text-sm leading-7">
{lines.map((line, i) => (
<div key={i} className="flex items-start">
{line.type === 'cmd' ? (
<>
<span className="text-accent select-none mr-2 shrink-0">$</span>
<span className="text-gray-900 dark:text-gray-100 break-all">{line.text}</span>
{line.active && <span className="term-cursor text-accent ml-0.5" />}
</>
) : (
<span className="text-gray-600 dark:text-gray-400 pl-4">{line.text}</span>
)}
</div>
))}
{done && (
<div className="flex items-center mt-1">
<span className="text-accent select-none mr-2">$</span>
<span className="term-cursor text-accent" />
</div>
)}
</div>

{/* Stats bar */}
<div className="grid grid-cols-2 sm:grid-cols-4 border-t border-gray-200 dark:border-gray-800">
{[
{ num: '15+', key: 'years_exp' },
{ num: '3',   key: 'companies' },
{ num: 'VP',  key: 'title' },
{ num: '∞',   key: 'passion' },
].map(s => (
<div key={s.key} className="flex flex-col items-center py-4 border-r border-gray-200 dark:border-gray-800 last:border-r-0 font-mono">
<span className="text-xl font-bold text-accent term-glow">{s.num}</span>
<span className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5">{s.key}</span>
</div>
))}
</div>

{/* CTA */}
<div className="flex flex-wrap gap-3 p-5 border-t border-gray-200 dark:border-gray-800">
<a href="#contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-white font-mono font-semibold text-xs transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30">
<span className="opacity-70">$</span> contact --email
</a>
<a href="#experience" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono font-semibold text-xs transition-all duration-200 hover:border-accent hover:text-accent">
<span className="opacity-60">$</span> cat experience.md
</a>
</div>
</TerminalWindow>

{/* Photo terminal window */}
<TerminalWindow title="photo.jpg" noPadding className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
<img
src={me}
className="w-full aspect-square object-cover"
style={{ filter: 'grayscale(20%)' }}
alt="Ravi Chandra Ravulapati"
/>
</TerminalWindow>
</div>
</section>
);
}

export default Hero;
