import React from 'react';

import './about.scss'
import me from '../../img/me.jpg';

function About() {

	return (
		<main className="about">
			<img src={me} className="about__me" alt="Ravi" />
			<ul>
				<li>Over 10 years of developing web and mobile applications using HTML5, JavaScript, TypeScript, JavaScript libraries (Angular, Jquery), J2EE, NodeJS.</li>
				<li>Working as Assistant Consultant with <a href="https://www.tcs.com/" target="_blank" rel="noreferrer">TATA Consultancy Services</a> from March 2011 to till date. Over 9 years experience in design and development of web applications using HTML5, Twitter Bootstrap, Jquery, Angular.</li>
				<li>Over 9 years of experience in CSS3, CSS Pre-processors (LESS, SCSS) to customize the look and feel of both web and mobile applications.</li>
				<li>Over 8 years of experience in developing cross browser compatible web applications (Gracefully degrading the HTML5 features using Modernizr java script library).</li>
				<li>Over 6 years of experience in TDD, Test automation and DevOps.</li>
			</ul>
		</main>
	)
}


export default About;
