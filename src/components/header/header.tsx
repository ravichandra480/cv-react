import './header.scss';
import { useState, useEffect, useCallback } from 'react';

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' },
];

function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [theme, setTheme] = useState<'dark' | 'light'>(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'light' || saved === 'dark') return saved;
		return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme(prev => prev === 'dark' ? 'light' : 'dark');
	}, []);

	return (
		<header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
			<div className="header__inner">
				<a href="#home" className="header__logo">
					RC<span className="header__logo-dot">.</span>
				</a>
				<div className="header__right">
					<button
						className="header__theme-toggle"
						onClick={toggleTheme}
						aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
						title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
					>
						{theme === 'dark' ? (
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
						className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						<span />
						<span />
						<span />
					</button>
					<nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className="header__link"
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
