function Footer() {
	return (
		<footer className="border-t border-gray-200 dark:border-gray-800 py-8">
			<div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
				<span className="text-lg font-extrabold text-gray-900 dark:text-gray-100">RC<span className="text-accent">.</span></span>
				<span className="text-xs text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} Ravi Chandra Ravulapati. All rights reserved.</span>
			</div>
		</footer>
	);
}

export default Footer;
