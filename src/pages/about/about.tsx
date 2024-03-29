import React from 'react';

import './about.scss'
import me from '../../images/me.jpg';

function About() {

	return (
		<main className="about">
			<img src={me} className="about__me" alt="Ravi" />
			<div>
				<p className="about__name">Ravi Chandra Ravulapati (He/Him)</p>
				<p className="about__job">Vice President at <a href="https://www.morganstanley.com/" target="_blank" rel="noreferrer">Morgan Stanley</a> <br />Senior Web Developer | Front End Architect | JavaScript | TypeScript | Angular | Elm<br /></p>
				<p className="about__tags">Talks about #javascript, #websecurity, #accessability, #webdevelopment, and #frontenddevelopment</p>
			</div>
		</main>
	)
}


export default About;
