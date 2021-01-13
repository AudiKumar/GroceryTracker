
// setup when you clone the repo from github 
// 1) clear the catche: expo r -c
//     a) if expo cli isn't installed you should do that: npm install --global expo-cli
// 2) npm install
// 3) after you install all of the expo dependencies you'll be able to start the project normally: expo install

//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {BarCodeScanner} from 'expo-barcode-scanner';

//amplify stuff
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

//navigation 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

class App extends React.Component{
  render(){
    return ( 
      <NavigationContainer>{

        <View style={styles.container}>
          <Text> Open up App.js to start working on your app! </Text>
          <Text> YO ! </Text>
        </View>

      }</NavigationContainer>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true } )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
