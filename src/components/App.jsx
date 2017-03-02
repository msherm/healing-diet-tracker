import React, { PropTypes } from 'react';
import Diets from './Diets.jsx';
import DietBuilder from './DietBuilder.jsx';


class App extends React.Component {
  componentDidMount() {
  }

  render() {
    console.log("Diet: ", this.props.diets);
    return (
      <div className="container">
      	<h1>Healing Diet Tracker</h1>
        <Diets diets={ this.props.diets }/>
        <DietBuilder/>
      </div>
    );
  }
}

export default App;