
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
import {createStackNavigator} from "@react-navigation/stack";
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();


function shoppingListScreen({navigation}){
  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.navButtonLeft}>
        <Button title="Inventory" onPress={() => navigation.navigate("Inventory")}/>
      </View>

      <View style={styles.navButtonRight} >
        <Button 
          title="Scan Items" 
          color="#841584" 
          onPress={() => navigation.navigate("Barcode Scanner")}/>
      </View>

    </SafeAreaView>
  );
}

function inventoryScreen( {navigation} ){
  return(
    <View style={styles.container}  >   
      <Text s> 
        This is the inventory screen 
      </Text>

      <Button style={styles}
        title="Scan Items"
        onPress={() => navigation.navigate("Barcode Scanner")}
      />

      <Button 
        title="Shopping List"
        onPress={() => navigation.navigate("Shopping List")}
      />

    </View>
  );
}


function barCodeScreen( {navigation} ){
  return(
    <View style={styles.container}> 
      <Text>This is the barcode screen</Text>

      <Button 
        title="Inventory"
        onPress={() => navigation.navigate("Inventory")}
      />

      <Button 
        title="Shopping List"
        onPress={() => navigation.navigate("Shopping List")}
      />

    </View>
  );
}



class App extends React.Component{

  render(){
    return ( 
      <NavigationContainer>
        
        <Stack.Navigator>
          <Stack.Screen name = "Shopping List" component = {shoppingListScreen} />
          <Stack.Screen name = "Inventory" component = {inventoryScreen} />
          <Stack.Screen name = "Barcode Scanner" component = {barCodeScreen} />

        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

export default withAuthenticator(App, { 
} )

const styles = StyleSheet.create({
  navButtonLeft: {
    backgroundColor:'#000',
    borderRadius: 7,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    position:'absolute',
    bottom: 0,
    width: 200,
    height: 150, 
  },
  navButtonRight: {
    backgroundColor: '#FFA500',
    borderRadius: 7,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    position:'absolute',
    bottom: 0,
    width: 200,
    height: 150, 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
