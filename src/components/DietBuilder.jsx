import React, { PropTypes } from 'react';
import PermittedDetailAdder from './PermittedDetailAdder.jsx';
import PermittedLists from './PermittedLists.jsx';

class DietBuilder extends React.Component {
	constructor(props) {
		super(props);

		this.updateDietName = this.updateDietName.bind(this);
		this.addCondition = this.addCondition.bind(this);
		this.addPermittedDetail = this.addPermittedDetail.bind(this);
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

	addPermittedDetail(category) {
		if (this.refs['permitted-' + category + '-frequency'].value.length && this.refs['permitted-' + category + '-detail'].value.length) {
			this.props.addPermittedDetail(this.refs['permitted-' + category + '-frequency'].value, category, this.refs['permitted-' + category + '-detail'].value, this.refs['permitted-' + category + '-description'].value);
			this.refs['permitted-' + category + '-detail'].value = '';
			this.refs['permitted-' + category + '-description'].value = '';
		}
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
		this.props.toggleDietBuilder();
	}

	render() {
		if (!this.props.builderVisible) {
			return null;
		} else {
			const conditions = this.props.dietBuilder.conditions.length ? this.props.dietBuilder.conditions.map((condition, i) => {return <li key={ i }>{ condition }</li>}) : <li className="initial">No conditions listed</li>;
		
			return (
				<div className="diet-builder">
					<h3>Diet Builder</h3>
					<h4>Diet Name</h4>
					<input ref="diet-name" placeholder="ex. Master Cleanse" onChange={ this.updateDietName }/>
					<div className="condition-adder">
						<h4>For Treating</h4>
						<input ref="condition" placeholder="ex. Dry Skin, Inflammation"/>
						<button onClick={ this.addCondition }>Add Condition</button>
						<ul className="conditions">
							{ conditions }
						</ul>
					</div>
					<div className="permitted-detail-adder">
						<h4>Foods Breakdown</h4>
						<div className="detail-adder">
							<label>Food Name</label>
							<input ref="permitted-food-detail" placeholder="ex. oranges, pizza"/>
							<label>Permitted Frequency</label>
							<select ref="permitted-food-frequency">
								<option value="always">always</option>
								<option value="sometimes">sometimes</option>
								<option value="never">never</option>
							</select>
							<label>Food Details</label>
							<textarea ref="permitted-food-description" placeholder="ex. Eat 3 times each day."></textarea>
							<button onClick={ this.addPermittedFoodDetail }>Add Food</button>
						</div>
						<PermittedLists category="food" permitted={ this.props.dietBuilder.permitted }/>
					</div>
					<div className="permitted-detail-adder">
						<h4>Activities Breakdown</h4>
						<div className="detail-adder">
							<label>Activity Name</label>
							<input ref="permitted-activity-detail" placeholder="ex. jogging, swimming"/>
							<label>Permitted Frequency</label>
							<select ref="permitted-activity-frequency">
								<option value="always">always</option>
								<option value="sometimes">sometimes</option>
								<option value="never">never</option>
							</select>
							<label>Activity details</label>
							<textarea ref="permitted-activity-description" placeholder="ex. 2 hours per day max."></textarea>
							<button onClick={ this.addPermittedActivityDetail }>Add Activity</button>
						</div>
						<PermittedLists category="activity" permitted={ this.props.dietBuilder.permitted }/>
					</div>
					<h4>Duration</h4>
					<div className="duration-adder">
						<label>Minimum</label>
						<input ref="duration-minimum" placeholder="ex. 4 days" onChange={ this.updateDuration }/>
						<label>Maximum</label>
						<input ref="duration-maximum" placeholder="ex. 3 weeks" onChange={ this.updateDuration }/>
					</div>
					<button className="add-diet" onClick={ this.addDiet }>Add Diet</button>
				</div>
			);
		}
		
	}
}

export default DietBuilder;