import React from 'react';
import { connect } from 'react-redux';
import { writeChannel, addChannel } from '../store';

function NewChannelEntry (props) {

  const { newChannelEntry, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control"
              type="text"
              name="channelName"
              placeholder="Enter channel name"
              value={newChannelEntry}
              onChange={handleChange} />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const mapStateToProps = function(state, ownProps){
  return {
    newChannelEntry: state.newChannelEntry
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(ev) {
      const action = writeChannel(ev.target.value);
      dispatch(action);
    },

    handleSubmit(ev) {
      ev.preventDefault();
      const thunk = addChannel(ev.target.channelName.value, ownProps.history);
      dispatch(thunk);
    }
  }
}


const newChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default newChannelEntryContainer;
