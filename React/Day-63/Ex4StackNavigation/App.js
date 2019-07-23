/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>I Miss Home</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Images"
          onPress={() => this.props.navigation.navigate('Images')}
        />
      </View>
    );
  }
}

class ImageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Image Screen</Text>
        <Text>Blood Angel</Text>
        <Image style={{width: 150, height:150}} source={require('./IMG_0005.jpg')} />
        <Text>Ultra Marine</Text>
        <Image style={{width: 150, height:150}} source={require('./IMG_0006.jpg')} />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go Back Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>The details amaze even me. </Text>
        <Button
          title="Go to Back to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
         <Button
          title="Go to Images"
          onPress={() => this.props.navigation.navigate('Images')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home:HomeScreen,
    Details: DetailsScreen,
    Images: ImageScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}