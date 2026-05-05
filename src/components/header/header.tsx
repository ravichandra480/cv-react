import { useState, useEffect } from 'react';
import { gtagEvent } from '../../lib/analytics';

const navItems = [
	{ label: 'about',      href: '#about' },
	{ label: 'skills',     href: '#skills' },
	{ label: 'experience', href: '#experience' },
	{ label: 'contact',    href: '#contact' },
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
		<header className={`fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 py-2' : 'py-4'}`}>
			<div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
				{/* Terminal-style logo */}
			<a
				href="#home"
				className="flex items-center gap-1 text-lg font-bold no-underline select-none"
				onClick={() => gtagEvent('nav_click', { category: 'Navigation', label: 'home logo', value: '#home' })}
			>
					<span className="text-accent animate-glow">&gt;_</span>
					<span className="text-gray-900 dark:text-gray-100 ml-1">RC</span>
					<span className="text-accent animate-blink">▊</span>
				</a>

				<div className="flex items-center gap-2">
					{/* Theme toggle */}
					<button
						className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 cursor-pointer transition-all duration-200 hover:text-accent hover:border-accent text-xs font-mono"
						onClick={() => {
						onToggleTheme();
						gtagEvent('toggle_theme', { category: 'Interaction', label: isDark ? 'switch-to-light' : 'switch-to-dark' });
					}}
						aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
						title={isDark ? 'light mode' : 'dark mode'}
					>
						{isDark ? '☀' : '⏾'}
					</button>

					{/* Hamburger */}
					<button
						className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[101]"
						onClick={() => {
						setMenuOpen(!menuOpen);
						gtagEvent('menu_toggle', { category: 'Navigation', label: 'hamburger', value: menuOpen ? 'close' : 'open' });
					}}
						aria-label="Toggle menu"
					>
						<span className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
						<span className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
						<span className={`block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300 ${menuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`} />
					</button>

					{/* Nav */}
					<nav className={`flex gap-1 md:flex ${menuOpen ? 'fixed top-0 right-0 h-screen w-64 flex-col bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 pt-20 px-6 gap-0' : 'max-md:hidden'}`}>
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="px-3 py-2 text-xs font-mono text-gray-500 dark:text-gray-400 no-underline rounded-lg transition-all duration-200 hover:text-accent dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 md:border-0 max-md:py-4 max-md:text-sm max-md:border-b max-md:border-gray-200 max-md:dark:border-gray-800 max-md:rounded-none"
								onClick={() => {
							setMenuOpen(false);
							gtagEvent('nav_click', { category: 'Navigation', label: item.label, value: item.href });
						}}
							>
								<span className="text-accent opacity-60 mr-1">./</span>{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
