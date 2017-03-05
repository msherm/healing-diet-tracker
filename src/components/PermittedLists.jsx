import React, { PropTypes } from 'react';

const PermittedLists = (props) => {
  const permitted = {};
  permitted.always = props.permitted.always[props.category].map((item, i) => {
    return (
      <li key={ i }>
        <strong>{ item.detail }</strong>
        <span>{ item.description }</span>
      </li>
    );
  });

  permitted.sometimes = props.permitted.sometimes[props.category].map((item, i) => {
    return (
      <li key={ i }>
        <strong>{ item.detail }</strong>
        <span>{ item.description }</span>
      </li>
    );
  });

  permitted.never = props.permitted.never[props.category].map((item, i) => {
    return (
      <li key={ i }>
        <strong>{ item.detail }</strong>
        <span>{ item.description }</span>
      </li>
    );
  });

  return (
    <ul className="permitted-detail-lists">
    	<li className="permitted-always">
        <h5>Always</h5>
        <ul className="permitted-always-list">
          { permitted.always }
        </ul>
      </li>
      <li className="permitted-sometimes">
        <h5>Sometimes</h5>
        <ul className="permitted-sometimes-list">
          { permitted.sometimes }
        </ul>
      </li>
      <li className="permitted-never">
        <h5>Never</h5>
        <ul className="permitted-never-list">
          { permitted.never }
        </ul>
      </li>
    </ul>
  );
}

export default PermittedLists;