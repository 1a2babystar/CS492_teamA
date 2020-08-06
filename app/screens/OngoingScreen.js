import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import colors from '../config/colors';
import clr from '../config/clr';
import tempData from './tempData';
import OngoingList from '../../components/OngoingList';

for (var i = 0; i < tempData.length; i++) {
  tempData[i]['color'] = clr[i % 7];
}

export default class OngoingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Ongoing
            <Text> </Text>
            <Text style={{fontWeight: '100', color: colors.blue}}>
              Converting
            </Text>
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <OngoingList list={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
    paddingHorizontal: 20,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
});
