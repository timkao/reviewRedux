import React from 'react';
import { updateName } from '../store';
import { connect } from 'react-redux';

function NameEntry (props) {

    const { name, handleChange } = props;

    return (
      <form className="form-inline">
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control"
          onChange={handleChange}
          value={name}
        />
      </form>
    );

}

const mapStateToProps = function(state) {
  return {
    name: state.name
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleChange(ev) {
      const action = updateName(ev.target.value);
      dispatch(action);
    }
  }
}

const nameEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NameEntry);
export default nameEntryContainer;
