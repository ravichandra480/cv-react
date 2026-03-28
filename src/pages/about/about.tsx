function About() {
	return (
		<section className="py-20 md:py-28" id="about">
			<span className="block text-xs font-semibold tracking-widest uppercase text-accent mb-4">About</span>
			<div>
				<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
					Building the web,<br />
					<span className="text-accent">one component at a time.</span>
				</h2>
				<div className="mt-8 space-y-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
					<p>
						I'm Ravi Chandra Ravulapati, a hands-on Lead UI Engineer and Vice President at Morgan Stanley. 
						With 15+ years of experience, I specialize in designing and delivering scalable, 
						accessible web applications using React, Angular, and TypeScript.
					</p>
					<p>
						I have deep ownership of frontend architecture, design systems, and automated testing. 
						My track record includes building and scaling UI platforms in regulated financial and 
						enterprise environments from monorepo architectures to micro front-ends.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
					<div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5">
						<span className="block text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Location</span>
						<span className="text-sm font-semibold text-gray-900 dark:text-gray-100">London, UK</span>
					</div>
					<div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5">
						<span className="block text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Email</span>
						<a href="mailto:rc.ravulapati@gmail.com" className="text-sm font-semibold text-accent hover:underline">rc.ravulapati@gmail.com</a>
					</div>
					<div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5">
						<span className="block text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Current Role</span>
						<span className="text-sm font-semibold text-gray-900 dark:text-gray-100">VP, Morgan Stanley</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
