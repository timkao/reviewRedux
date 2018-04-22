import React from 'react';
import NameEntry from './NameEntry';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Navbar(props) {

  const { channel } = props;
    return (
      <nav>
        <h3># {channel !== undefined ? channel.name : null}</h3>
        <NameEntry />
      </nav>
    );

}

const mapStateToProps = function(state, ownProps) {
  const currentChannelId = ownProps.location.pathname.split("/")[2];
  const currentChannel = state.channels.filter(channel => {
    return channel.id === Number(currentChannelId);
  })
  return {
    channel: currentChannel[0],
  }
}


const navBarContainer = withRouter(connect(mapStateToProps)(Navbar));
export default navBarContainer;
