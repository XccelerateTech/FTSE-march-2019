/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { Button, View, Text, Image, ScrollView } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

class DetailsScreen extends React.Component {
  render() {
    let array = ['Bananas, Apples, Chocolate, Durian, Frosting']
    return (
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ fontSize: 26 }}>Details!</Text>
        <Text style={{ fontSize: 24 }}>This screen records some details, like:</Text>
        <Text style={{ fontSize: 20 }}>{array.map((items, index) => {
          return (
            <Text key={index}>{items}</Text>
          )
        })}</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ fontSize: 30 }}>Welcome Home</Text>
        <Image source={require('./housepic.png')} style={{ width: 200, height: 150 }} />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ fontSize: 30 }}>Settings Screen</Text>
        <Image source={require('./settings-icon.png')} style={{ height: 200, width: 200 }} />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class GalleryScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ fontSize: 28 }}>Welcome to the Gallery</Text>

        <ScrollView>
          <Text style={{ fontSize: 20 }}>
            Old Hong Kong
          </Text>
          <Image source={require('./old-hk.jpg')} style={{ width: 300, height: 300 }} />
          <Text style={{ fontSize: 20 }}>
            Modern Hong Kong
          </Text>
          <Image source={require('./modern-hk.jpg')} style={{ width: 300, height: 300 }} />
          <Text style={{ fontSize: 20 }}>
            Future Hong Kong
          </Text>
          <Image source={require('./hive-city.png')} style={{ width: 300, height: 300 }} />
          </ScrollView>
      </View>
    )
  }
}



const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Gallery: GalleryScreen,

});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Gallery: GalleryScreen,
  Details: DetailsScreen,
});

const GalleryStack = createStackNavigator({
  Gallery: GalleryScreen,
  Home: HomeScreen,
  Settings: SettingsScreen
})

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
    Gallery: GalleryStack

  },
  {
    /* Other configuration remains unchanged */
  }
));
