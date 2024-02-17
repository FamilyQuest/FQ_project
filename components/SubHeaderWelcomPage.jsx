import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from './Task';
const SubHeader = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>Welcome Back!</Text>
        <Text style={styles.sectionSubTitle}>Today's Tasks </Text>

        <View style={styles.items}>
          {/*this is where the tasks will go!*/}
          <Task text={'dishes'} time={'10:00'} points={20} />
          <Task text={'dishes'} time={'12:00'} points={50}/>
          <Task text={'dishes'} time={'09:00'} points={35}/>
          <Task text={'dishes'} time={'16:00'} points={10}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  items: {
    marginTop:30,
  },
  sectionTitle: {
    fontSize: 40,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf:'center',
    // fontFamily: 'FredokaOne-Regular',
  },
  sectionSubTitle: {
    fontSize: 20,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf:'center',
    marginTop:10,
    // fontFamily: 'Nunito',
  },
});

export default SubHeader;
