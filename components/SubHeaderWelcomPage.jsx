// import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from './Task';

const SubHeader = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>Welcome Back!</Text>
        <Text style={styles.sectionSubTitle}>Today's Tasks </Text>
        <View style={{height: "60%"}}>
          <ScrollView showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.scrollViewContent}
          >
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
        </ScrollView>
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
  scrollViewContent: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 40,
    marginTop: 20,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf:'center',
  },
  sectionSubTitle: {
    fontSize: 20,
    color: '#363636',
    fontWeight: 'bold',
    alignSelf:'center',
    marginVertical:10,
    
  },
});

export default SubHeader;
