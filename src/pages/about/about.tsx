import './about.scss';

function About() {
	return (
		<section className="about" id="about">
			<span className="section-label">About</span>
			<div className="about__content">
				<h2 className="section-title">
					Building the web,<br />
					<span className="about__accent">one component at a time.</span>
				</h2>
				<div className="about__body">
					<p className="about__text">
						I'm Ravi Chandra Ravulapati — a hands-on Lead UI Engineer and Vice President at Morgan Stanley. 
						With 15+ years of experience, I specialize in designing and delivering scalable, 
						accessible web applications using React, Angular, and TypeScript.
					</p>
					<p className="about__text">
						I have deep ownership of frontend architecture, design systems, and automated testing. 
						My track record includes building and scaling UI platforms in regulated financial and 
						enterprise environments — from monorepo architectures to micro front-ends.
					</p>
				</div>
				<div className="about__details">
					<div className="about__detail">
						<span className="about__detail-label">Location</span>
						<span className="about__detail-value">London, UK</span>
					</div>
					<div className="about__detail">
						<span className="about__detail-label">Email</span>
						<a href="mailto:rc.ravulapati@gmail.com" className="about__detail-value">rc.ravulapati@gmail.com</a>
					</div>
					<div className="about__detail">
						<span className="about__detail-label">Current Role</span>
						<span className="about__detail-value">VP, Morgan Stanley</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
