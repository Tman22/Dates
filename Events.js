'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  ScrollView
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  scrollableContentContainerIOS: {
    flex: 1
  },
  rowContainer: {
    padding: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
})

const time = ['12am','1am','2am','3am','4am','5am','6am','7am','8am','9am','10am',
              '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm',
              '10pm','11pm']
class Events extends Component {
  constructor() {
    super();
  }

  handleScroll() {
    return time.map((e, i) => {
      return  <View key={i}>
                <View style={styles.rowContainer}>
                  <View>
                    <Text>{time[i]}</Text>
                  </View>
                </View>
                <View style={styles.separator}/>
              </View>
    })
  }

  render() {
    return (
      <ScrollView styles={styles.container} contentContainerStyle={styles.scrollableContentContainerIOS}>
        {this.handleScroll()}
      </ScrollView>
    );
  }

}

module.exports = Events;
