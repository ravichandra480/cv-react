import TerminalWindow from '../../components/terminal-window/terminal-window';

const skillCategories = [
{
title: 'Core Frontend',
file: 'frontend.sh',
skills: ['React', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'RxJS', 'Next.js'],
},
{
title: 'Testing & Quality',
file: 'testing.sh',
skills: ['Playwright', 'Cypress', 'Vitest', 'TDD', 'Cross-browser Testing', 'Performance Optimization'],
},
{
title: 'Accessibility',
file: 'a11y.sh',
skills: ['WCAG 2.1 AA', 'ARIA', 'Accessible UI', 'Semantic HTML'],
},
{
title: 'Architecture & Tools',
file: 'arch.sh',
skills: ['Nx Monorepo', 'Micro Front-ends', 'Vite', 'Git', 'CI/CD', 'Docker'],
},
{
title: 'Leadership',
file: 'leadership.sh',
skills: ['Technical Mentorship', 'Code Reviews', 'Sprint Collaboration', 'Architecture Ownership'],
},
{
title: 'Backend Integration',
file: 'backend.sh',
skills: ['REST APIs', 'Node.js', 'Java', 'Spring', 'DB2'],
},
{
title: 'AI-Powered Development',
file: 'ai.sh',
skills: [
'GitHub Copilot',
'AI Agents',
'LLM Integration',
'Prompt Engineering',
'Spec-driven Development',
'AI Code Generation',
'RAG Pipelines',
],
},
];

function Skills() {
return (
<section className="py-20 md:py-28" id="skills">
<div className="flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-500 mb-6">
<span className="text-accent">$</span>
<span>ls ~/skills/</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{skillCategories.map((cat, i) => (
<TerminalWindow key={i} title={`~/skills/${cat.file}`}>
<h3 className="text-xs font-bold mb-4 text-gray-500 dark:text-gray-500 font-mono uppercase tracking-widest">
# {cat.title}
</h3>
<div className="flex flex-wrap gap-2">
{cat.skills.map((skill, j) => (
<span
key={j}
className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors hover:border-accent/50 hover:text-accent"
>
<span className="text-accent opacity-50">&gt;</span>
{skill}
</span>
))}
</div>
</TerminalWindow>
))}
</div>
</section>
);
}

export default Skills;
