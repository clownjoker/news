import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View >
      <View style={styles.header}>
        <View style={[styles.rightLiftView, {width: '15%'}]}>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="search1" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.rightLiftView}>
          <Text style={styles.titleHeader}>Exploore</Text>
          <TouchableOpacity>
            <Feather name="menu" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightLiftView: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#FF0000',
    paddingHorizontal: 15,
  },
  titleHeader: {
    color:'#fff',
    fontSize:15,
    // marginTop: -2
  }
});
export default Header;
