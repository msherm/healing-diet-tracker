import React, { PropTypes } from 'react';

class DietBuilder extends React.Component {
	constructor(props) {
		super(props);

		this.addCondition = this.addCondition.bind(this);
		this.addPermittedFoodDetail = this.addPermittedFoodDetail.bind(this);
		this.addPermittedActivityDetail = this.addPermittedActivityDetail.bind(this);
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

	render() {
		const conditions = this.props.dietBuilder.conditions.length ? this.props.dietBuilder.conditions.map((condition, i) => {return <li key={ i }>{ condition }</li>}) : <li className="initial">Add conditions</li>;
		
		//TODO: create PermittedItem component and make the following list mappings DRY
		const permitted = { food: [], activity: [] };
		permitted.food.always = this.props.dietBuilder.permitted.always.food.map((item, i) => {
			return (
				<li key={ i }>
					<strong>{ item.detail }</strong>
					<span>{ item.description }</span>
				</li>
			);
		});

		permitted.food.sometimes = this.props.dietBuilder.permitted.sometimes.food.map((item, i) => {
			return (
				<li key={ i }>
					<strong>{ item.detail }</strong>
					<span>{ item.description }</span>
				</li>
			);
		});

		permitted.food.never = this.props.dietBuilder.permitted.never.food.map((item, i) => {
			return (
				<li key={ i }>
					<strong>{ item.detail }</strong>
					<span>{ item.description }</span>
				</li>
			);
		});

		permitted.activity.always = this.props.dietBuilder.permitted.always.activity.map((item, i) => {
			return (
				<li key={ i }>
					<strong>{ item.detail }</strong>
					<span>{ item.description }</span>
				</li>
			);
		});

		permitted.activity.sometimes = this.props.dietBuilder.permitted.sometimes.activity.map((item, i) => {
			return (
				<li key={ i }>
					<strong>{ item.detail }</strong>
					<span>{ item.description }</span>
				</li>
			);
		});

		permitted.activity.never = this.props.dietBuilder.permitted.never.activity.map((item, i) => {
			return (
				<li key={ i }>
					<strong>{ item.detail }</strong>
					<span>{ item.description }</span>
				</li>
			);
		});

		return (
			<div className="diet-builder">
				<h3>Diet Builder</h3>
				<input placeholder="Diet Name"/>
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
					<ul className="permitted-detail-lists">
						<li className="permitted-always">
							<h5>Always</h5>
							<ul className="permitted-always-list">
								{ permitted.food.always }
							</ul>
						</li>
						<li className="permitted-sometimes">
							<h5>Sometimes</h5>
							<ul className="permitted-somtimes-list">
								{ permitted.food.sometimes }
							</ul>
						</li>
						<li className="permitted-never">
							<h5>Never</h5>
							<ul className="permitted-never-list">
								{ permitted.food.never }
							</ul>
						</li>
					</ul>
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
					<ul className="permitted-detail-lists">
						<li className="permitted-always">
							<h5>Always</h5>
							<ul className="permitted-always-list">
								{ permitted.activity.always }
							</ul>
						</li>
						<li className="permitted-sometimes">
							<h5>Sometimes</h5>
							<ul className="permitted-somtimes-list">
								{ permitted.activity.sometimes }
							</ul>
						</li>
						<li className="permitted-never">
							<h5>Never</h5>
							<ul className="permitted-never-list">
								{ permitted.activity.never }
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default DietBuilder;