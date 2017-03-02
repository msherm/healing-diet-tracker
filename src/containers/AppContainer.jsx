import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { addCondition } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App diets={ this.props.diets }
           dietBuilder={ this.props.dietBuilder }
           addCondition={ this.props.handleAddCondition }/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    diets: store.dietsState.diets,
    dietBuilder: store.dietBuilderState
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleAddCondition: (condition) => {
      console.log("Cond: ", condition);
      dispatch(addCondition(condition));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);