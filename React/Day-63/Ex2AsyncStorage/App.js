/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


// import React, { Component } from 'react';
 
// import AsyncStorage from '@react-native-community/async-storage';
// import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       textInputData: '',
//       //to get the value from the TextInput
//       getValue: [],
//       //to set the value on Text
//     };
//   }
//   // get the value from AsyncStorage when the component mounts
//   componentDidMount() {
//     this.getData();
//   }

//   storeData = async () => {
//     try {
//       if(this.state.textInputData){
//       let insertedData = this.state.getValue.concat([this.state.textInputData])

//       await AsyncStorage.setItem('@storage_Key', JSON.stringify(insertedData))
//       this.setState({ textInputData: '' })
//       alert('Data Saved');
//       }
//     } catch (e) {
//       alert(e)
//       // saving error
//     }
//     this.getData();
//   }

//   getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('@storage_Key')
//       if(JSON.parse(value) !== null) {
//         let realVal = this.state.value.concat([JSON.parse(value)])
//         // value previously stored
//         this.setState({ getValue: realVal })
//       }
//     } catch(e) {
//       // error reading value
//     }
//   }

//   render() {
//     return (
//       <View style={styles.Container}>
//         <TextInput
//           style={{height: 40, width:100, borderColor: 'gray', borderWidth: 1}}
//           value={this.state.textInputData}
//           onChangeText={data => this.setState({ textInputData: data })}
//         />
//         <TouchableOpacity
//           onPress={this.storeData}>
//           <Text> Save Value </Text>
//         </TouchableOpacity>
//         <Text> {this.state.getValue} </Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   Container: {
//     alignItems: 'center',
//     flex: 1,
//     margin: 10,
//     marginTop:60
//   }
// });

import React, { Component } from 'react';
 
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textInputData: '',
      //to get the value from the TextInput
      getValue: '',
      //to set the value on Text
    };
  }
  // get the value from AsyncStorage when the component mounts
  componentDidMount() {
    this.getData();
  }

  storeData = async () => {
    try {
      if(this.state.textInputData){
      await AsyncStorage.setItem('@storage_Key', this.state.textInputData)
      this.setState({ textInputData: '' })
      alert('Data Saved');
      }
    } catch (e) {
      // saving error
    }
    this.getData();
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // value previously stored
        this.setState({ getValue: value })
      }
    } catch(e) {
      // error reading value
    }
  }

  render() {
    return (
      <View style={styles.Container}>
        <TextInput
          style={{height: 40, width:100, borderColor: 'gray', borderWidth: 1}}
          value={this.state.textInputData}
          onChangeText={data => this.setState({ textInputData: data })}
        />
        <TouchableOpacity
          onPress={this.storeData}>
          <Text> Save Value </Text>
        </TouchableOpacity>
        <Text> {this.state.getValue} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop:60
  }
});