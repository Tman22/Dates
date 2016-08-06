'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

var Calendar = require('./Calendar.js');
var Events = require('./Events.js');

class Dates extends Component {
  render() {
    return (
      <View>
        <Calendar/>
        <Events/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Dates', () => Dates);
