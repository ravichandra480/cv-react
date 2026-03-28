const skillCategories = [
	{
		title: 'Core Frontend',
		skills: ['React', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'RxJS', 'Next.js'],
	},
	{
		title: 'Testing & Quality',
		skills: ['Playwright', 'Cypress', 'Vitest', 'TDD', 'Cross-browser Testing', 'Performance Optimization'],
	},
	{
		title: 'Accessibility',
		skills: ['WCAG 2.1 AA', 'ARIA', 'Accessible UI', 'Semantic HTML'],
	},
	{
		title: 'Architecture & Tools',
		skills: ['Nx Monorepo', 'Micro Front-ends', 'Vite', 'Git', 'CI/CD', 'Docker'],
	},
	{
		title: 'Leadership',
		skills: ['Technical Mentorship', 'Code Reviews', 'Sprint Collaboration', 'Architecture Ownership'],
	},
	{
		title: 'Backend Integration',
		skills: ['REST APIs', 'Node.js', 'Java', 'Spring', 'DB2'],
	},
	{
		title: 'AI-Powered Development',
		skills: [
			'GitHub Copilot',
			'AI Agents',
			'LLM Integration',
			'Prompt Engineering',
			'Spec-driven Development',
			'AI Code Generation',
			'Copilot Extensions',
			'OpenAI API',
			'RAG Pipelines',
		],
	},
];

function Skills() {
	return (
		<section className="py-20 md:py-28" id="skills">
			<span className="block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Expertise</span>
			<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">Skills & Technologies</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{skillCategories.map((category, index) => (
					<div
						className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
						key={index}
					>
						<h3 className="text-base font-bold mb-4 text-gray-900 dark:text-gray-100">{category.title}</h3>
						<div className="flex flex-wrap gap-2">
							{category.skills.map((skill, i) => (
								<span
									key={i}
									className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skills;
