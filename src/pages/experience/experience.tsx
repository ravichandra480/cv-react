const experiences = [
	{
		period: 'Oct 2022 – Present',
		role: 'Lead UI Engineer / Vice President',
		company: 'Morgan Stanley',
		location: 'London, UK',
		url: 'https://www.morganstanley.com/',
		highlights: [
			'Led frontend architecture across Operations Technology, standardizing React and Angular patterns',
			'Owned and scaled a Nx-based monorepo, improving build performance and cross-team collaboration',
			'Led ownership of a containerized web platform supporting micro front-end architecture',
			'Designed and delivered reusable UI frameworks adopted as the default frontend foundation',
			'Established a frontend testing strategy using Playwright, Vitest, and Cypress',
			'Configured AI tools using agent-based architectures to accelerate development',
		],
		tech: ['React', 'Angular', 'TypeScript', 'Nx', 'Playwright', 'Vitest', 'Cypress', 'Vite', 'Java', 'Spring'],
	},
	{
		period: 'Aug 2021 – Nov 2022',
		role: 'Senior Engineer 2',
		company: 'Featurespace',
		location: 'London, UK',
		url: 'https://www.featurespace.com/',
		highlights: [
			'Contributed to the development of the ARIC™ Risk Hub behavioral analytics platform',
			'Migrated from Tableau to Apache Superset and designed a plug-in architecture',
			'Contributed to transitioning the platform to a cloud-native architecture',
			'Ensuring adherence to the WAI WCAG 2.0 accessibility standards',
		],
		tech: ['Elm', 'JavaScript', 'TypeScript', 'Java', 'React'],
	},
	{
		period: 'Jul 2018 – Aug 2021',
		role: 'Senior Developer — EBRD',
		company: 'Tata Consultancy Services',
		location: 'London, UK',
		url: 'https://www.tcs.com/',
		highlights: [
			'Development of cloud native web applications for the European Bank',
			'Built reusable UI library enabling faster delivery through repeatable components',
			'Performance optimized through frontend, backend, and server configurations',
		],
		tech: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Java/J2EE', 'Azure'],
	},
	{
		period: 'Dec 2016 – Jun 2018',
		role: 'Developer — Internal IT',
		company: 'Tata Consultancy Services',
		location: 'Chennai, India',
		url: 'https://www.tcs.com/',
		highlights: [
			'Platform for Operations & Delivery (PoD) using disruptive technologies',
			'Creating reusable components using AngularJS MVC',
		],
		tech: ['AngularJS', 'HTML5', 'CSS3', 'Java/J2EE', 'PL/SQL'],
	},
	{
		period: 'Sep 2015 – Dec 2016',
		role: 'Developer — TalkTalk',
		company: 'Tata Consultancy Services',
		location: 'London, UK',
		url: 'https://www.tcs.com/',
		highlights: [
			'Built simpler, clearer, faster cloud native web applications for sales & billing',
			'Ensured adherence to WAI WCAG 2.0 accessibility standards',
		],
		tech: ['AngularJS', 'HTML5', 'CSS3', 'AWS'],
	},
	{
		period: 'Mar 2011 – Aug 2015',
		role: 'Developer — Internal IT',
		company: 'Tata Consultancy Services',
		location: 'Chennai, India',
		url: 'https://www.tcs.com/',
		highlights: [
			'Platform for Operations & Delivery using social computing, mobility, big data',
			'Standards-compliant web development with accessibility focus',
		],
		tech: ['AngularJS', 'HTML5', 'CSS3', 'Java/J2EE', 'PL/SQL'],
	},
];

function Experience() {
	return (
		<section className="py-20 md:py-28" id="experience">
			<span className="block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Career</span>
			<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">Work Experience</h2>
			<div className="relative pl-8 md:pl-10">
				{/* Timeline line */}
				<div className="absolute left-3 md:left-4 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<div className="relative" key={index}>
							{/* Dot */}
							<div className="absolute -left-[23px] md:-left-[26px] top-2 w-3 h-3 rounded-full border-2 border-accent bg-white dark:bg-gray-950" />
							<div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 transition-all duration-200 hover:border-accent/40">
								<span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent mb-3">
									{exp.period}
								</span>
								<h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
								<div className="flex items-center gap-2 mt-1 mb-3">
									<a
										href={exp.url}
										target="_blank"
										rel="noreferrer"
										className="text-sm font-medium text-accent hover:underline"
									>
										{exp.company}
									</a>
									<span className="text-xs text-gray-400 dark:text-gray-500">· {exp.location}</span>
								</div>
								<ul className="space-y-1.5 mb-4">
									{exp.highlights.map((h, i) => (
										<li key={i} className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-300 before:dark:bg-gray-700">
											{h}
										</li>
									))}
								</ul>
								<div className="flex flex-wrap gap-1.5">
									{exp.tech.map((t, i) => (
										<span
											key={i}
											className="inline-block px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
										>
											{t}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
				<span className="block text-xs font-semibold tracking-widest uppercase text-accent mb-4">Education</span>
				<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
					Bachelor of Technology — Electronics & Communication Engineering
				</h3>
				<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
					Gudlavalleru Engineering College (JNTU Kakinada) · 2005 – 2009
				</p>
			</div>
		</section>
	);
}

export default Experience;
