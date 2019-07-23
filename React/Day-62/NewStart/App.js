// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow
// //  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// import React, {Component} from 'react';
// import {Text, View  } from 'react-native';

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, TextInput, FlatList, ScrollView } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  highlight: {
    color: '#FF0000'
  }
})

export default class App extends React.Component {
    constructor(props){
      super(props)
        this.state={
          text: '',
          isActive: true
        }
    }

    render(){
      return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native Cohort 8!</Text>

            <TouchableOpacity onPress={()=>{Alert.alert('Well done you have pressed my button')}}>
            <View>
              <Image source={require('./myButton.png')} style={{height: 50, width: 50}}/>
            </View>
            </TouchableOpacity>

            <TextInput
            style={{height:40, width:100, borderColor: '#FFFFFF', borderWidth: 2}}
            onChangeText={(text)=> this.setState=({text})}
            value={this.state.text} 
            />

            <Text style={[styles.welcome, this.state.isActive && styles.highlight]}>{this.state.text}</Text>

            <FlatList
              data={
                [
                  {key: 'John Snow', orientation: 'Left-handed'}, {key: 'Theon Greyjoy', orientation: 'Left-handed'}, {key: 'Brianne of Tarth', orientation: 'Right-handed'}
                ]
              }
              renderItem={({item}) => 
            <Text>{item.key} is {item.orientation}</Text>}
            />

            <ScrollView >
                <Text style={{fontSize:30}}>Scroll through some of these brilliant images</Text>
                <Text>React-Native</Text>
                <Image source={{uri: "https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png", width:50, height:50}}/>

                <Text>React</Text>
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", width:50, height:50}}/>

                <Text>NodeJs</Text>
                <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", width:50, height:50}}/>
            </ScrollView>


        </View>
      )
    }
}