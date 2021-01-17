
// setup when you clone the repo from github 
// 1) clear the catche: expo r -c
//     a) if expo cli isn't installed you should do that: npm install --global expo-cli
// 2) npm install
// 3) after you install all of the expo dependencies you'll be able to start the project normally: expo install

//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {BarCodeScanner} from 'expo-barcode-scanner';

//basic amplify setup
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure({config, Analytics:{disabled: true} });

//authtication 
import {Auth} from 'aws-amplify';


//navigation 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

function shoppingListScreen(){
  return(
    <View style={styles.container}> 
      <Text> THIS IS THE SHOPPING LIST SCREEN THE GOAL IS TO USE THIS FOR MAKIKING A SHOPPING LIST </Text>
    </View>
  );
}

function inventoryScreen(){
  return(
    <View style={styles.container}>   
      <Text> This is the inventory screen </Text>
    </View>
  );
}


function barCodeScreen(){
  return(
    <View style={styles.container}> 
      <Text>This is the barcode screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

class App extends React.Component{

  render(){
    return ( 
      <NavigationContainer>
        
        <Stack.Navigator>
          <Stack.Screen name = "Shopping List" component = {shoppingListScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

export default withAuthenticator(App, { 
} )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
