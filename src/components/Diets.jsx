import React, { PropTypes } from 'react';

const Diets = (props) => {
  const diets = props.diets.map((diet, i) => {
    return (
      <li key={ i }>
        <h2>{ diet.name }</h2>
        <ul className="diet-details">
          <li className="conditions"><span>Conditions:</span><span>{ diet.conditions }</span></li>
          <li className="duration"><span>Duration</span><span>Minimum: { diet.duration.minimum ? diet.duration.minimum : 'Not specified' }, Maximum: { diet.duration.maximum ? diet.duration.maximum : 'Not specified' }</span></li>
          <li className="permitted-lists">
            permitted lists
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