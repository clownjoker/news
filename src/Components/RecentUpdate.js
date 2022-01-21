import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RecentUpdate = ({TypeNews,TitleRecentUpdate,Time}) => {
  return (
    <View style={styles.container}>
      {/* image */}
      <View style={styles.img}></View>

      <View style={styles.type}>
        <View style={styles.typeNew}>
          <Text style={styles.typeNewTitle}>{TypeNews}</Text>
        </View>
      </View>
      <Text style={styles.titleRecentUpdate}>
        {TitleRecentUpdate}
      </Text>
      <View style={styles.timeAndDate}>
        <Text style={[styles.time, {marginHorizontal: 5}]}>{Time}</Text>
        <Ionicons name="time-outline" size={15} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 160,
    backgroundColor: '#212121',
    marginBottom: 10,
  },
  type: {
    marginRight: 10,
    alignSelf: 'flex-end',
    flexDirection: 'column',
  },
  typeNew: {
    backgroundColor: '#FF7F3F',
    paddingVertical: 2,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  typeNewTitle: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  titleRecentUpdate: {
    fontSize: 16,
    marginRight: 10,
    color: '#000',
    marginTop: 10,
  },
  timeAndDate: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 5
  },
  time: {
    fontSize: 13,
  },
});
export default RecentUpdate;
