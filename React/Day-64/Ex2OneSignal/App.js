/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import OneSignal from 'react-native-onesignal';



type Props = {};

export default class App
extends Component<Props> {

componentWillMount() {

OneSignal.init("81229137-0369-4593-9045-be1d7cc7ebaa");

}

render() {

return (

<View>

<Text>Welcome to React Native!</Text>

</View>

);

}

}
