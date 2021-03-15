import React from "react";
import moment from 'moment';

import './experience.scss'

class Experience extends React.Component {
	public state: {[key: string]: any} = {};

	constructor(props: any) {
		super(props);
		const starts = moment('2011-03-24');
		const ends   = moment(new Date());
		this.state = {experience: moment.duration(ends.diff(starts))};
	}

	render() {
		return (
			<div className="organisation">
				<div className="organisation--name">
					<a href="https://www.tcs.com/" target="_blank" rel="noreferrer">Tata Consultancy Services</a>
				</div>
				<div className="organisation--role">
					Role : Assistant Consultant | Senior Web Developer | Front End Architect | JavaScript | TypeScript | Angular
				</div>
				<div className="organisation--duration">
					Duration&nbsp;:&nbsp;
					<span className="organisation--duration__length">
						{this.state.experience['_data']['years']} Years {this.state.experience['_data']['months']} Months {this.state.experience['_data']['days']} Days
					</span>
				</div>
				<div className="organisation--dates">
					Dates Employed : March 2011 – Present
				</div>
				<div className="organisation--location">
					Location: London, United Kingdom
				</div>
			</div>
		)
	}
}

export default Experience;
