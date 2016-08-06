'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

var CalendarPicker = require('react-native-calendar-picker')

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  _onDateChange(date) {
    this.setState({ date: date });
  }

  render() {
    return (
      <View style={styles.container}>

        <CalendarPicker
          selectedDate={this.state.date}
          onDateChange={this.onDateChange}
          screenWidth={Dimensions.get('window').width}
          selectedBackgroundColor={'#5ce600'} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  selectedDate: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#000',
  }
});

module.exports = Calendar;
