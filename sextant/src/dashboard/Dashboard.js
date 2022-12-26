import React from 'react';
import Banner from './Banner';

import IPAddress from '../common/IP';
import Pylon from '../common/PylonClient';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
      return(
        <div className="exhibit">
          <div className="main">
            <Banner/>
            <IPAddress/>
            <Pylon />
          </div>
        </div>
    );
  }
}

export default Dashboard;