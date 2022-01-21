import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stories = ({nameNews,Time,Name}) => {
  return (
    <View style={styles.container}>
      {/* title news and time and names */}
      <View style={styles.titleNewsView}>
        <Text style={styles.titleNews}>{nameNews}</Text>
        <View style={styles.nameTime}>
          <View style={styles.timeNews}>
            <Text style={[styles.user,{marginHorizontal:5}]}>{Time}</Text>
            <Ionicons name='time-outline' size={16} style={{marginTop: 2}}/>
          </View>
          <Text style={styles.user}>{Name}</Text>
        </View>
      </View>
      {/* img */}
      <View style={styles.img}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical:13,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent:'flex-end'
  },
  img: {
    width: 85,
    height: 85,
    backgroundColor: '#334257',
  },
  titleNewsView: {
    marginRight:10,flex:1
  },
  titleNews: {
    fontSize:16,fontWeight:'bold',width: '70%',alignSelf:'flex-end'
  },
  nameTime: {
    flexDirection:'row',justifyContent:'space-between',marginTop:15
  },
  user: {
    fontSize:14,
    // color:'#C7BEA2'
  },
  timeNews:{
    flexDirection:'row'
  }
});
export default Stories;
