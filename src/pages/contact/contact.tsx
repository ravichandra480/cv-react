import TerminalWindow from '../../components/terminal-window/terminal-window';

function Contact() {
return (
<section className="py-20 md:py-28" id="contact">
<div className="flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-500 mb-6">
<span className="text-accent">$</span>
<span>./connect.sh</span>
</div>

<TerminalWindow title="~/connect.sh — bash">
<div className="font-mono">
<div className="text-xs text-gray-500 dark:text-gray-500 mb-4 space-y-1">
<div><span className="text-accent">$</span> echo "Want to discuss frontend architecture?"</div>
<div className="pl-4 text-gray-700 dark:text-gray-300">Want to discuss frontend architecture?</div>
<div><span className="text-accent">$</span> echo "I'd love to hear from you."</div>
<div className="pl-4 text-gray-700 dark:text-gray-300">I'd love to hear from you.</div>
</div>

<a
href="mailto:rc.ravulapati@gmail.com"
className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-bold mb-6 block"
>
<span className="text-gray-400 dark:text-gray-500">email →</span>
rc.ravulapati@gmail.com
</a>

<div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
<a
href="https://www.linkedin.com/in/ravichandrar/"
target="_blank"
rel="noreferrer"
className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-mono transition-all duration-200 hover:border-accent hover:text-accent"
>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
./linkedin
</a>
<a
href="https://github.com/ravichandra480"
target="_blank"
rel="noreferrer"
className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-mono transition-all duration-200 hover:border-accent hover:text-accent"
>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
./github
</a>
<a
href="https://www.npmjs.com/~ravichandrar"
target="_blank"
rel="noreferrer"
className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-mono transition-all duration-200 hover:border-accent hover:text-accent"
>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
<rect x="1" y="1" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="2"/>
<text x="12" y="17" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">N</text>
</svg>
./npm
</a>
</div>
</div>
</TerminalWindow>
</section>
);
}

export default Contact;
