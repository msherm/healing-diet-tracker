import React, { PropTypes } from 'react';

const Diets = (props) => {
  const diets = props.diets.map((diet, i) => {
    return (
      <li key={ i }>
        <h2>{ diet.name }</h2>
        <ul className="diet-details">
          <li className="conditions"><span>Conditions:</span><span>{ diet.conditions }</span></li>
          <li className="prediet-cleanse"><span>Pre Diet Cleanse:</span>{ diet.preDietCleanse ? 'yes' : 'no' }</li>
          <li className="duration"><span>Duration</span><span>Minimum: { diet.duration.minimum }, Maximum: { diet.duration.maximum }</span></li>
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