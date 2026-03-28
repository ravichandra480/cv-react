import './skills.scss';

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
];

function Skills() {
	return (
		<section className="skills" id="skills">
			<span className="section-label">Expertise</span>
			<h2 className="section-title">Skills & Technologies</h2>
			<div className="skills__grid">
				{skillCategories.map((category, index) => (
					<div className="skills__card" key={index}>
						<h3 className="skills__card-title">{category.title}</h3>
						<div className="skills__tags">
							{category.skills.map((skill, i) => (
								<span className="skills__tag" key={i}>{skill}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skills;
