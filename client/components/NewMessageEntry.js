import React from 'react';
import { postMessage, writeMessage } from '../store';
import { connect } from 'react-redux';

function NewMessageEntry (props) {

    const { handleChange, handleSubmit, newMessageEntry, name} = props;

    return (
      <form id="new-message-form" onSubmit={ evt => handleSubmit(evt, name, newMessageEntry)}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={newMessageEntry}
            onChange={handleChange}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Chat!</button>
          </span>
        </div>
      </form>
    );

}


const mapStateToProps = function(state) {
  return {
    newMessageEntry: state.newMessageEntry,
    name: state.name
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleChange(evt) {
      const action = writeMessage(evt.target.value);
      dispatch(action);
    },
    handleSubmit(evt, name, newMessageEntry) {
      evt.preventDefault();
      const content = newMessageEntry;
      const { channelId } = ownProps;

      dispatch(postMessage({ name, content, channelId }));
      dispatch(writeMessage(''));
    }
  }
}

const newMessageEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageEntry);
export default newMessageEntryContainer;
