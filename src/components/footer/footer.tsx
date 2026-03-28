function Footer() {
	return (
		<footer className="border-t border-gray-200 dark:border-gray-800 py-4 font-mono">
			<div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3 text-xs">
				<div className="flex items-center gap-2">
					<span className="w-2 h-2 rounded-full bg-term-green inline-block animate-pulse" />
					<span className="text-accent font-bold">&gt;_</span>
					<span className="text-gray-900 dark:text-gray-100 font-bold">RC</span>
					<span className="text-gray-400 dark:text-gray-600 hidden sm:inline">·</span>
					<span className="text-gray-400 dark:text-gray-600 hidden sm:inline">branch: <span className="text-accent">main</span></span>
				</div>
				<span className="text-gray-400 dark:text-gray-500">
					© {new Date().getFullYear()} Ravi Chandra Ravulapati. All rights reserved.
				</span>
			</div>
		</footer>
	);
}

export default Footer;
