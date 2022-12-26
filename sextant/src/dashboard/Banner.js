import React, { Component } from 'react';
import { Sextant } from '../shared/sextantINFO';

// eslint-disable-next-line
class Banner extends Component {
    render() {
      return (
        <div className="container-fluid p-3 text-center">
          <h1>{Sextant.app.title}</h1>
        </div>
      );
    }
}

export default Banner;