/*
 *
 * MessagesPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectMessagesPage from './selectors';
import styles from './styles.scss';

import Sidebar from 'components/Sidebar';
import AppWrap from 'components/AppWrap';
import DashboardHeading from 'components/DashboardHeading';

export class MessagesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.messagesPage}>
        <Sidebar />
        <AppWrap>
          <DashboardHeading>Messages</DashboardHeading>
        </AppWrap>
      </div>
    );
  }
}

const mapStateToProps = selectMessagesPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
