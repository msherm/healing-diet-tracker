import React, { PropTypes } from 'react';
import PermittedLists from './PermittedLists.jsx';

class DietBuilder extends React.Component {
	constructor(props) {
		super(props);

		this.updateDietName = this.updateDietName.bind(this);
		this.addCondition = this.addCondition.bind(this);
		this.addPermittedFoodDetail = this.addPermittedFoodDetail.bind(this);
		this.addPermittedActivityDetail = this.addPermittedActivityDetail.bind(this);
		this.updateDuration = this.updateDuration.bind(this);
		this.addDiet = this.addDiet.bind(this);
	}

	updateDietName() {
		this.props.updateDietName(this.refs['diet-name'].value);
	}

	addCondition() {
		this.props.addCondition(this.refs.condition.value);
		this.refs.condition.value = '';
	}

	addPermittedFoodDetail() {
		if (this.refs['permitted-food-frequency'].value.length && this.refs['permitted-food-detail'].value.length) {
			this.props.addPermittedDetail(this.refs['permitted-food-frequency'].value, 'food', this.refs['permitted-food-detail'].value, this.refs['permitted-food-description'].value);
			this.refs['permitted-food-detail'].value = '';
			this.refs['permitted-food-description'].value = '';
		}
	}

	addPermittedActivityDetail() {
		if (this.refs['permitted-activity-frequency'].value.length && this.refs['permitted-activity-detail'].value.length) {
			this.props.addPermittedDetail(this.refs['permitted-activity-frequency'].value, 'activity', this.refs['permitted-activity-detail'].value, this.refs['permitted-activity-description'].value);
			this.refs['permitted-activity-detail'].value = '';
			this.refs['permitted-activity-description'].value = '';
		}
	}

	updateDuration() {
		if (this.refs['duration-minimum'].value.length || this.refs['duration-maximum'].value.length) {
			this.props.updateDuration(this.refs['duration-minimum'].value, this.refs['duration-maximum'].value);
		}
	}

	addDiet() {
		//TODO: clear/reset adder refs (permitted detail, category, description) 
		this.props.addDiet(this.props.dietBuilder.name, this.props.dietBuilder.conditions, this.props.dietBuilder.routine, this.props.dietBuilder.permitted, this.props.dietBuilder.duration);
		this.refs['diet-name'].value = '';
		this.refs['duration-minimum'].value = '';
		this.refs['duration-maximum'].value = '';
	}

	render() {
		const conditions = this.props.dietBuilder.conditions.length ? this.props.dietBuilder.conditions.map((condition, i) => {return <li key={ i }>{ condition }</li>}) : <li className="initial">Add conditions</li>;
		
		return (
			<div className="diet-builder">
				<h3>Diet Builder</h3>
				<input ref="diet-name" placeholder="Diet Name" onChange={ this.updateDietName }/>
				<div className="condition-adder">
					<h4>For Treating</h4>
					<input ref="condition" placeholder="Condition"/>
					<button onClick={ this.addCondition }>Add Condition</button>
					<ul className="conditions">
						{ conditions }
					</ul>
				</div>
				<div className="permitted-detail-adder">
					<h4>Foods Permitted</h4>
					<div className="detail-adder">
						<span><input ref="permitted-food-detail" placeholder="Food (e.g. pizza, ice cream, chili)"/></span>
						<span>
							<select ref="permitted-food-frequency">
								<option value="always">always</option>
								<option value="sometimes">sometimes</option>
								<option value="never">never</option>
							</select>
							permitted
						</span>
						<span>
							<textarea ref="permitted-food-description" placeholder="important information"></textarea>
						</span>
						<button onClick={ this.addPermittedFoodDetail }>Add Food</button>
					</div>
					<PermittedLists category="food" permitted={ this.props.dietBuilder.permitted }/>
				</div>
				<div className="permitted-detail-adder">
					<h4>Activities Permitted</h4>
					<div className="detail-adder">
						<span><input ref="permitted-activity-detail" placeholder="Food (e.g. running, swimming, weight lifting)"/></span>
						<span>
							<select ref="permitted-activity-frequency">
								<option value="always">always</option>
								<option value="sometimes">sometimes</option>
								<option value="never">never</option>
							</select>
							permitted
						</span>
						<span>
							<textarea ref="permitted-activity-description" placeholder="important information"></textarea>
						</span>
						<button onClick={ this.addPermittedActivityDetail }>Add Activity</button>
					</div>
					<PermittedLists category="activity" permitted={ this.props.dietBuilder.permitted }/>
				</div>
				<div className="duration-adder">
					<input ref="duration-minimum" placeholder="Minimum (e.g. 3 days, 2 weeks, 1 month)" onChange={ this.updateDuration }/>
					<input ref="duration-maximum" placeholder="Maximum (e.g. 4 months, Indefinite)" onChange={ this.updateDuration }/>
				</div>
				<button onClick={ this.addDiet }>Add Diet</button>
			</div>
		);
	}
}

export default DietBuilder;