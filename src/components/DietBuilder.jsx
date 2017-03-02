import React, { PropTypes } from 'react';

class DietBuilder extends React.Component {
	constructor(props) {
		super(props);

		this.addCondition = this.addCondition.bind(this);
	}

	addCondition() {
		this.props.addCondition(this.refs.condition.value);
		this.refs.condition.value = '';
	}

	render() {
		const conditions = this.props.dietBuilder.conditions.length ? this.props.dietBuilder.conditions.map((condition, i) => {return <li key={ i }>{ condition }</li>}) : <li className="initial">Add conditions</li>;

		return (
			<div className="diet-builder">
				<h3>Diet Builder</h3>
				<input placeholder="Diet Name"/>
				<div className="condition-adder">
					<input ref="condition" placeholder="Condition"/>
					<button onClick={ this.addCondition }>Add Condition</button>
					<ul className="conditions">
						{ conditions }
					</ul>
				</div>
			</div>
		);
	}
}

export default DietBuilder;