import React, { PropTypes } from 'react';
import Diets from './Diets.jsx';
import DietBuilder from './DietBuilder.jsx';


class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
      	<h1>Healing Diet Tracker</h1>
        <Diets diets={ this.props.diets }/>
        <DietBuilder dietBuilder={ this.props.dietBuilder } addCondition={ this.props.addCondition }/>
      </div>
    );
  }
}

export default App;