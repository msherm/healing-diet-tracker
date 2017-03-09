import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { toggleDietBuilder, updateDietName, addCondition, addPermittedDetail, updateDuration, addDiet } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App builderVisible={ this.props.app.builderVisible }
           diets={ this.props.diets }
           toggleDietBuilder={ this.props.handleToggleDietBuilder }
           dietBuilder={ this.props.dietBuilder }
           updateDietName={ this.props.handleUpdateDietName }
           addCondition={ this.props.handleAddCondition }
           addPermittedDetail={ this.props.handleAddPermittedDetail}
           addDiet={ this.props.handleAddDiet }
           updateDuration={ this.props.handleUpdateDuration }
           addDiet={ this.props.handleAddDiet }/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    app: store.appState,
    diets: store.dietsState.diets,
    dietBuilder: store.dietBuilderState
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleToggleDietBuilder: () => {
      dispatch(toggleDietBuilder());
    },
    handleUpdateDietName: (name) => {
      dispatch(updateDietName(name));
    },
    handleAddCondition: (condition) => {
      dispatch(addCondition(condition));
    },
    handleAddPermittedDetail: (frequency, category, detail, description) => {
      dispatch(addPermittedDetail(frequency, category, detail, description));
    },
    handleUpdateDuration: (minimum, maximum) => {
      dispatch(updateDuration(minimum, maximum));
    },
    handleAddDiet: (name, conditions, routine, permitted, duration) => {
      dispatch(addDiet(name, conditions, routine, permitted, duration));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);