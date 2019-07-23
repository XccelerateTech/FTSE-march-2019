/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { RNCamera } from 'react-native-camera';

import OneSignal from 'react-native-onesignal';





export default class App
extends Component {

takePicture = async function() {

if (this.camera) {

const options = { quality: 0.5, base64: true };

const data = await this.camera.takePictureAsync(options);

console.log(data.uri);

}

}

componentWillMount() {

  OneSignal.init("81229137-0369-4593-9045-be1d7cc7ebaa");
  
  }

render() {

return (

<View style={styles.container}>

<Text style={styles.welcome}>Welcome to React Native!</Text>

<RNCamera

ref={ref => {

this.camera = ref;

}}

style={{

flex: 1,

width: '100%',

}}

androidCameraPermissionOptions={{

title: 'Permission to use camera',

message: 'We need your permission to use your camera',

buttonPositive: 'Ok',

buttonNegative: 'Cancel',

}}

androidRecordAudioPermissionOptions={{

title: 'Permission to use audio recording',

message: 'We need your permission to use your audio',

buttonPositive: 'Ok',

buttonNegative: 'Cancel',

}}

>

</RNCamera>

<View style={{
flex: 0, flexDirection: 'row',
justifyContent: 'center' }}>

<TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>

<Text style={{
fontSize: 14 }}> SNAP
</Text>

</TouchableOpacity>

</View>

</View>

);

}

}

const styles = StyleSheet.create({

container: {

flex: 1,

flexDirection: 'column',

backgroundColor: 'black',

},

preview: {

flex: 1,

justifyContent: 'flex-end',

alignItems: 'center',

},

capture: {

flex: 0,

backgroundColor: '#fff',

borderRadius: 5,

padding: 15,

paddingHorizontal: 20,

alignSelf: 'center',

margin: 20,

},

});
