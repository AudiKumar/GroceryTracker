
// setup when you clone the repo from github 
// 1) clear the catche: expo r -c
//     a) if expo cli isn't installed you should do that: npm install --global expo-cli
// 2) npm install
// 3) after you install all of the expo dependencies you'll be able to start the project normally: expo install

//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {BarCodeScanner} from 'expo-barcode-scanner';

//basic amplify setup
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(   config );


//navigation 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

function shoppingListScreen({navigation}){
  return(
    <View style={styles.container}  >   
      <Text>shopping list </Text>  
    </View>
  );
}

function inventoryScreen( {navigation} ){
  return(
    <View style={styles.container}  >  
      <Text> inventory </Text>   
    </View>
  );
}


function barCodeScreen( {navigation} ){
  return(
    <View style={styles.container}  > 
      <Text> barCode </Text>  
    </View>
  );
}

class App extends React.Component{
  render(){
    return ( 
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={ { activeTintColor: '#EB3B52',labelStyle: {fontSize: 22}, style:{backgroundColor:'#CDCDCD',} ,}}>
          <Tab.Screen name="Inventory" component= {inventoryScreen}/>
          <Tab.Screen name="Scan" component= {barCodeScreen}/>
          <Tab.Screen name="List" component= {shoppingListScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default withAuthenticator(App, { 
} )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
