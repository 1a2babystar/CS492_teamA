import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import colors from '../app/config/colors';

export default OngoingList = ({list}) => {
  return (
    <View style={[styles.listContainer, {backgroundColor: list.color}]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.count}>{list.upload_time}</Text>
        <Text style={styles.subtitle}>Upload Time</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.count}>{list.remaining_time}</Text>
        <Text style={styles.subtitle}>Ramaining Time</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: '200',
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  },
});
