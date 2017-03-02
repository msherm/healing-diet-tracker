import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { addVendingMachine, removeVendingMachine, addRow, removeRow, addColumn, removeColumn, addSlot, removeSlot, showProductSelectionPanel, hideProductSelectionPanel, selectTargetSlot, addProductToSlot, removeProductFromSlot } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App diets={ this.props.diets }
           dietBuilder={ this.props.dietBuilder }/>
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
    // handleRetrieveDiets: () => {
    //   dispatch(retrieveDiets());
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);