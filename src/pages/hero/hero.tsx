import me from '../../images/me_1.jpg';

function Hero() {
	return (
		<section className="pt-32 pb-20 md:pt-40 md:pb-28" id="home">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 items-center">
				<div className="animate-fade-in-up">
					<span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-accent/10 text-accent mb-6">
						Lead Frontend Engineer
					</span>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
						Crafting <span className="text-accent">Scalable</span>
						<br />
						Web Experiences.
					</h1>
					<p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
						Hands-on Lead UI Engineer with 15+ years building enterprise-scale
						React &amp; Angular platforms, design systems, and accessible interfaces
						in regulated financial environments.
					</p>
					<div className="flex flex-wrap gap-4 mt-8">
						<a href="#contact" className="inline-flex items-center px-7 py-3 rounded-lg bg-accent text-white font-semibold text-sm transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25">
							Get in Touch
						</a>
						<a href="#experience" className="inline-flex items-center px-7 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm transition-all duration-200 hover:border-accent hover:text-accent">
							View Experience
						</a>
					</div>
				</div>
				<div className="flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
					<img src={me} className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl ring-4 ring-accent/20" alt="Ravi Chandra Ravulapati" />
				</div>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
				{[
					{ number: '15+', label: 'Years Experience' },
					{ number: '3', label: 'Companies' },
					{ number: 'VP', label: 'Morgan Stanley' },
					{ number: '∞', label: 'Passion' },
				].map((stat) => (
					<div className="text-center" key={stat.label}>
						<span className="block text-3xl font-extrabold text-accent">{stat.number}</span>
						<span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default Hero;
