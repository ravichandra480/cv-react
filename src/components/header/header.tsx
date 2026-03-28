import { useState, useEffect } from 'react';

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' },
];

function Header({ isDark, onToggleTheme }: { isDark: boolean; onToggleTheme: () => void }) {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 py-3' : 'py-5'}`}>
			<div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
				<a href="#home" className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 no-underline tracking-tight">
					RC<span className="text-accent">.</span>
				</a>
				<div className="flex items-center gap-2">
					<button
						className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 cursor-pointer transition-all duration-200 hover:text-accent hover:border-accent hover:rotate-[15deg]"
						onClick={onToggleTheme}
						aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
					>
						{isDark ? (
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="12" cy="12" r="5" />
								<line x1="12" y1="1" x2="12" y2="3" />
								<line x1="12" y1="21" x2="12" y2="23" />
								<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
								<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
								<line x1="1" y1="12" x2="3" y2="12" />
								<line x1="21" y1="12" x2="23" y2="12" />
								<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
								<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
							</svg>
						) : (
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
							</svg>
						)}
					</button>
					<button
						className={`md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[101]`}
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						<span className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
						<span className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
						<span className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${menuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`} />
					</button>
					<nav className={`flex gap-2 md:flex ${menuOpen ? 'fixed top-0 right-0 h-screen w-72 flex-col bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 pt-20 px-8 gap-0' : 'max-md:hidden'}`}>
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 no-underline rounded-lg transition-all duration-200 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 md:border-0 max-md:py-4 max-md:text-lg max-md:border-b max-md:border-gray-200 max-md:dark:border-gray-800 max-md:rounded-none"
								onClick={() => setMenuOpen(false)}
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
