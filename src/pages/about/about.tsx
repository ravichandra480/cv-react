import React from 'react';

import './about.scss'
import me from '../../img/me.jpg';

function About() {

	return (
		<main className="about">
			<img src={me} className="about__me" alt="Ravi" />
			<ul>
				<li>Working as Senior Engineer 2 with <a href="https://www.featurespace.com/" target="_blank" rel="noreferrer">Featurespace</a>.</li>
				<li>Over 10 years of developing web and mobile applications using HTML5, JavaScript, TypeScript, JavaScript libraries (Angular, Jquery), J2EE, NodeJS.</li>
				<li>Over 9 years of experience in CSS3, CSS Pre-processors (LESS, SCSS) to customize the look and feel of both web and mobile applications.</li>
				<li>Over 8 years of experience in developing cross browser compatible web applications (Gracefully degrading the HTML5 features using Modernizr java script library).</li>
				<li>Over 6 years of experience in TDD, Test automation and DevOps.</li>
			</ul>
		</main>
	)
}


export default About;
