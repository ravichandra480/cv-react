import React from 'react';

import './about.scss'
import me from '../../img/me.jpg';

function About() {

	return (
		<main className="about">
			<img src={me} className="about__me" alt="Ravi" />
			<div>
				<p className="about__name">Ravi Chandra Ravulapati (He/Him)</p>
				<p className="about__job">Senior Engineer 2 at <a href="https://www.featurespace.com/" target="_blank" rel="noreferrer">Featurespace</a> <br />Senior Web Developer | Front End Architect | JavaScript | TypeScript | Angular<br /></p>
				<p className="about__tags">Talks about #javascript, #websecurity, #accessability, #webdevelopment, and #frontenddevelopment</p>
			</div>
		</main>
	)
}


export default About;
