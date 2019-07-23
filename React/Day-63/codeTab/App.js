/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

class DetailsScreen extends Component {
  render () {
    let array = ['React', 'Redux', 'React-Native', 'NodeJs', 'JQuery', 'Postgres']
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Welcome to Details</Text>
      <View style={{height:30, width:'100%', backgroundColor:'red'}}></View>
      <Text style={{fontSize: 24}}> {array.map((items, index)=>{
        return (
          <Text key={index}>{items}</Text>
        )
      })}</Text>
      </View>
    )
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}> Welcome to the Home Screen
        </Text>

        <Image style={{height:150, width: 200}} source={require('./housepic.png')}/> 
        <Button 
        title = "Go to Details"
        onPress={()=> this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

class SettingsScreen extends Component {
  render(){
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 30 }} > Settings Screen</Text>
      <Image style={{height:150, width: 200}} source={require('./settings-icon.png')}/> 
        <Button 
        title = "Go to Details"
        onPress={()=> this.props.navigation.navigate('Details')}
        />
      </View>
    )
  }
}

class GalleryScreen extends Component {
  render(){
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Welcome to our Gallery</Text>

      <ScrollView>
        <Text style={{fontSize:20}}>Old Hong Kong</Text>
        <Image source= {require('./old-hk.jpg')} style={{height: 300, width:300}} />
        <Text style={{fontSize:20}}>Modern Hong Kong</Text>
        <Image source= {require('./modern-hk.jpg')} style={{height: 300, width:300}} />
        <Text style={{fontSize:20}}>Future Hong Kong</Text>
        <Image source= {require('./hive-city.png')} style={{height: 300, width:300}} />
      </ScrollView>
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Gallery: GalleryScreen,
  Details: DetailsScreen
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Gallery: GalleryScreen,
  Details: DetailsScreen
})

const GalleryStack = createStackNavigator({
  Gallery: GalleryScreen,
  Settings: SettingsScreen,
  Details: DetailsScreen
})

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
    Gallery: GalleryStack
  }
))