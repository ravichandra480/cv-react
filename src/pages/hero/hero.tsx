import './hero.scss';
import me from '../../images/me.jpg';

function Hero() {
	return (
		<section className="hero" id="home">
			<div className="hero__grid">
				<div className="hero__content">
					<div className="hero__badge">Lead Frontend Engineer</div>
					<h1 className="hero__title">
						Crafting <span className="hero__title--accent">Scalable</span>
						<br />
						Web Experiences.
					</h1>
					<p className="hero__subtitle">
						Hands-on Lead UI Engineer with 15+ years building enterprise-scale
						React &amp; Angular platforms, design systems, and accessible interfaces
						in regulated financial environments.
					</p>
					<div className="hero__cta">
						<a href="#contact" className="hero__btn hero__btn--primary">Get in Touch</a>
						<a href="#experience" className="hero__btn hero__btn--secondary">View Experience</a>
					</div>
				</div>
				<div className="hero__image-wrap">
					<img src={me} className="hero__image" alt="Ravi Chandra Ravulapati" />
				</div>
			</div>
			<div className="hero__stats">
				<div className="hero__stat">
					<span className="hero__stat-number">15+</span>
					<span className="hero__stat-label">Years Experience</span>
				</div>
				<div className="hero__stat">
					<span className="hero__stat-number">3</span>
					<span className="hero__stat-label">Companies</span>
				</div>
				<div className="hero__stat">
					<span className="hero__stat-number">VP</span>
					<span className="hero__stat-label">Morgan Stanley</span>
				</div>
				<div className="hero__stat">
					<span className="hero__stat-number">∞</span>
					<span className="hero__stat-label">Passion</span>
				</div>
			</div>
		</section>
	);
}

export default Hero;
