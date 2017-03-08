import React, { PropTypes } from 'react';
import PermittedLists from './PermittedLists.jsx';

const Diets = (props) => {
  const diets = props.diets.map((diet, i) => {
    return (
      <li key={ i }>
        <h2>{ diet.name }</h2>
        <ul className="diet-details">
          <li className="conditions"><em>Conditions</em><ul>{ diet.conditions.map((condition, i) => <li key={ i }>{ condition }</li>) }</ul></li>
          <li className="duration"><em>Duration</em><span>Minimum: { diet.duration ? diet.duration.minimum : 'Not specified' }, Maximum: { diet.duration ? diet.duration.maximum : 'Not specified' }</span></li>
          <li className="permitted-lists">
            <em>Permitted Foods</em>
            <PermittedLists category="food" permitted={ diet.permitted }/>
            <em>Permitted Activities</em>
            <PermittedLists category="activity" permitted={ diet.permitted }/>
          </li>
        </ul>
      </li>
    );
  });

  return (
    <ul className="diets">
    	{ diets }
    </ul>
  );
}

export default Diets;