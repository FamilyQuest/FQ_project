// import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from './Task';

const SubHeader = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>Welcome Back!</Text>
        <Text style={styles.sectionSubTitle}>Today's Tasks </Text>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Task text={'Dishes'} time={'10:00'} points={20} />
          <Task text={'Laundry'} time={'12:00'} points={50}/>
          <Task text={'Grocery Shopping'} time={'09:00'} points={35}/>
          <Task text={'Exercise'} time={'16:00'} points={10}/>
          <Task text={'Exercise'} time={'16:00'} points={10}/>
          <Task text={'Exercise'} time={'16:00'} points={10}/>
          <Task text={'drugs'} time={'16:00'} points={10}/>
          <Task text={'cocaine'} time={'16:00'} points={10}/>
          <Task text={'lsd'} time={'16:00'} points={10}/>
          <Task text={'Heroin '} time={'16:00'} points={10}/>
          <Task text={'Exercise'} time={'16:00'} points={10}/>
          <Task text={'Exercise'} time={'16:00'} points={10}/>
          <Task text={'Exercise'} time={'16:00'} points={10}/>
          <Task text={'Exercise'} time={'16:00'} points={10}/>
          <Task text={'Exercise'} time={'16:00'} points={10}/>
          
          <View style={{ marginBottom: 100 }} />
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 40,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf:'center',
  },
  sectionSubTitle: {
    fontSize: 20,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf:'center',
    marginTop:10,
  },
});

export default SubHeader;
