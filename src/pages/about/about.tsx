import TerminalWindow from '../../components/terminal-window/terminal-window';
import { gtagEvent } from '../../lib/analytics';

function About() {
return (
<section className="py-20 md:py-28" id="about">
<div className="flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-500 mb-6">
<span className="text-accent">$</span>
<span>cat about.txt</span>
</div>
<TerminalWindow title="~/about.txt — bash">
<div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-mono">
<p>
<span className="text-accent mr-2">&gt;</span>
I'm Ravi Chandra Ravulapati, a hands-on Lead UI Engineer and Vice President at Morgan Stanley.
With 15+ years of experience, I specialize in designing and delivering scalable,
accessible web applications using React, Angular, and TypeScript.
</p>
<p>
<span className="text-accent mr-2">&gt;</span>
I have deep ownership of frontend architecture, design systems, and automated testing.
My track record includes building and scaling UI platforms in regulated financial and
enterprise environments — from monorepo architectures to micro front-ends.
</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 font-mono text-xs">
<div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-4">
<span className="block text-gray-400 dark:text-gray-500 mb-1">location:</span>
<span className="text-gray-900 dark:text-gray-100">London, UK</span>
</div>
<div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-4">
<span className="block text-gray-400 dark:text-gray-500 mb-1">email:</span>
<a
	href="mailto:rc.ravulapati@gmail.com"
	className="text-accent hover:underline break-all"
	onClick={() => gtagEvent('contact_email_click', { category: 'Contact', label: 'about email', value: 'mailto:rc.ravulapati@gmail.com' })}
>
	rc.ravulapati@gmail.com
</a>
</div>
<div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-4">
<span className="block text-gray-400 dark:text-gray-500 mb-1">role:</span>
<span className="text-gray-900 dark:text-gray-100">VP, Morgan Stanley</span>
</div>
</div>
</TerminalWindow>
</section>
);
}

export default About;
