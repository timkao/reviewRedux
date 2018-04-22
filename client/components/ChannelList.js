import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
function ChannelList(props) {

  const { messages, channels } = props;
  return (
    <ul>

      {
        channels.map(channel => {
          return (
            <li key={channel.id}>
              <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                <span># {channel.name}</span>
                <span className="badge">{messages.filter(message => message.channelId === channel.id).length}</span>
              </NavLink>
            </li>
          )
        })
      }
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );

}

/** Write your `connect` component below! **/
const mapStateToProps = function (state) {
  return {
    channels: state.channels,
    messages: state.messages
  }
}

const channelListContainer = withRouter(connect(mapStateToProps)(ChannelList));

export default channelListContainer;
