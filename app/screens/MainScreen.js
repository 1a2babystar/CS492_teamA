import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Select');
          }}>
          <Image source={require('../Images/get_started.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#FFF',
    paddingVertical: 12,
    width: 250,
    borderRadius: 12,
    alignItems: 'center',
  },
});
