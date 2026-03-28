import './experience.scss';

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
		<section className="experience" id="experience">
			<span className="section-label">Career</span>
			<h2 className="section-title">Work Experience</h2>
			<div className="experience__timeline">
				{experiences.map((exp, index) => (
					<div className="experience__item" key={index}>
						<div className="experience__marker">
							<div className="experience__dot" />
							{index < experiences.length - 1 && <div className="experience__line" />}
						</div>
						<div className="experience__card">
							<span className="experience__period">{exp.period}</span>
							<h3 className="experience__role">{exp.role}</h3>
							<a href={exp.url} target="_blank" rel="noreferrer" className="experience__company">
								{exp.company}
							</a>
							<span className="experience__location">{exp.location}</span>
							<ul className="experience__highlights">
								{exp.highlights.map((h, i) => (
									<li key={i}>{h}</li>
								))}
							</ul>
							<div className="experience__tech">
								{exp.tech.map((t, i) => (
									<span className="experience__tech-tag" key={i}>{t}</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="experience__education">
				<span className="section-label">Education</span>
				<h3 className="experience__edu-title">
					Bachelor of Technology — Electronics & Communication Engineering
				</h3>
				<p className="experience__edu-school">
					Gudlavalleru Engineering College (JNTU Kakinada) · 2005 – 2009
				</p>
			</div>
		</section>
	);
}

export default Experience;
