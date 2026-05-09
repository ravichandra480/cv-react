import TerminalWindow from '../../components/terminal-window/terminal-window';
import { gtagEvent } from '../../lib/analytics';

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
            <div className="flex items-center gap-2 font-mono text-xs text-gray-500 dark:text-gray-500 mb-6">
                <span className="text-accent">$</span>
                <span>cat experience.log | sort -r</span>
            </div>

            <div className="space-y-5">
                {experiences.map((exp, index) => (
                    <TerminalWindow
                        key={index}
                        title={`${exp.company.toLowerCase().replace(/\s/g, '-')}.log  [${exp.period}]`}
                    >
                        <div className="font-mono">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                                <a
                                    href={exp.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-accent hover:underline"
                                    onClick={() => gtagEvent('experience_company_click', { category: 'Experience', label: exp.company, value: exp.url })}
                                >
                                    {exp.company}
                                </a>
                                <span className="text-xs text-gray-400 dark:text-gray-500">· {exp.location}</span>
                            </div>

                            <ul className="space-y-1.5 mb-4">
                                {exp.highlights.map((h, i) => (
                                    <li key={i} className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex gap-2">
                                        <span className="text-accent shrink-0 select-none">&gt;</span>
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-200 dark:border-gray-800">
                                {exp.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="inline-block px-2 py-0.5 text-[11px] font-mono rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </TerminalWindow>
                ))}
            </div>

            <div className="mt-16">
                <TerminalWindow title="~/education.txt">
                    <div className="font-mono">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-accent">$</span>
                            <span className="text-xs text-gray-500 dark:text-gray-500">cat education.txt</span>
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                            Bachelor of Technology — Electronics &amp; Communication Engineering
                        </p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            <span className="text-accent mr-2">&gt;</span>
                            Gudlavalleru Engineering College (JNTU Kakinada) · 2005 – 2009
                        </p>
                    </div>
                </TerminalWindow>
            </div>
        </section>
    );
}

export default Experience;
