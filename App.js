import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>The Grove School</Text>
        <Button
          onPress={this._onPressButton}
          title="Seesaw"
          color="#841584"
        />
        <Button
          onPress={this._onPressButton}
          title="FreshGrade"
          color="#841584"
        />
        <Button
          onPress={this._onPressButton}
          title="School Calendar"
          color="#841584"
        />
        <Button
          onPress={this._onPressButton}
          title="Contact Us"
          color="#841584"
        />
        <Button
          onPress={this._onPressButton}
          title="The Grove Website"
          color="#841584"
        />
        <Text>7545 Parkway Drive Leeds, AL 35094 Phone: 205-352-0444</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
