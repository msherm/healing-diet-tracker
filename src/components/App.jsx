import React, { PropTypes } from 'react';
import Diets from './Diets.jsx';
import DietBuilder from './DietBuilder.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDietBuilder = this.toggleDietBuilder.bind(this);
  }

  componentDidMount() {
  }

  toggleDietBuilder() {
    this.props.toggleDietBuilder();
  }

  render() {
    const builderBuilderButtonClass = !this.props.builderVisible ? 'add-button right-align-button' : 'hide-button  right-align-button';

    return (
      <div className="container">
      	<h1>Healing Diet Tracker</h1>
        <button className={ builderBuilderButtonClass } onClick={ this.toggleDietBuilder }>{ !this.props.builderVisible ? 'Add Diet' : 'Hide Diet Builder' }</button>
        <DietBuilder builderVisible={ this.props.builderVisible }
                     toggleDietBuilder={ this.props.toggleDietBuilder }
                     dietBuilder={ this.props.dietBuilder }
                     updateDietName={ this.props.updateDietName }
                     addCondition={ this.props.addCondition }
                     addPermittedDetail={ this.props.addPermittedDetail }
                     updateDuration={ this.props.updateDuration }
                     addDiet={ this.props.addDiet }/>
        <Diets diets={ this.props.diets }/>
      </div>
    );
  }
}

export default App;