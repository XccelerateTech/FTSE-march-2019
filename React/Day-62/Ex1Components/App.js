/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Alert, TextInput, FlatList, ScrollView,} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      text: ' ',
      isActive: true,
    }
  }
  render() {
    return (
    <View style={styles.container}>
      
      <Text style={styles.welcome}>Welcome to React Native cohort 8!</Text>


      {/* This means that any children inside the touchableOpacity are clickable and can fire off events (on an onPress event) */}
      <TouchableOpacity onPress={()=>{Alert.alert("You've pressed a button well done!!")}}>
      <View>
        <Image style={{width:50,height:50}} source={require('./myButton.png')}/>
      </View>
      </TouchableOpacity>
      
      {/* On change event here means when the inputs value is changed then what do we do, we capture the text and we can use the function setState to the text object we've just captured. Then we display the text below  */}
      <TextInput
        style={{height: 40, width:100, borderColor: 'black', borderWidth: 2}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Text style={[styles.welcome, this.state.isActive && styles.highlight]}>{this.state.text}</Text>

      {/* Usage of flatlist component */}
      <Text>Game Of Thrones favourites</Text>
      <FlatList
        data={[{key: 'John Snow'}, {key: 'Sansa Stark'}, {key: 'Theon Greyjoy'}, {key: 'Bran Stark'}, {key: 'Tommen Giantsbane'}, {key: 'Brianne of Tarth'}, {key: 'Jamie Lannister'}, {key: 'Little Finger'}]}
        renderItem={({item}) => 
        <Text>{item.key}</Text>}
      />


      <ScrollView >
        <Text style={{fontSize:30}}>Scroll through some of my favourite images</Text>
        <Text style={{fontSize:24}}>React-Native</Text>
        <Image source={{uri: "https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png", width: 50, height: 50}} />


        
        <Text style={{fontSize:24}}>React</Text>
        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", width: 50, height: 50}} />
        <Text style={{fontSize:24}}>Redux</Text>
        <Image source={{uri: "https://cdn-images-1.medium.com/max/1200/1*dlapmYAhWBkrFuHm020qlg.png", width: 50, height: 50}} />
        <Text style={{fontSize:24}}>NodeJs</Text>
        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", width: 50, height: 50}} />
        <Text style={{fontSize:24}}>JavaScript</Text>
        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png", width: 50, height: 50}} />
        <Text style={{fontSize:24}}>HTML</Text>
        <Image source={{uri: "http://downloadicons.net/sites/default/files/html5-logo-icon-47404.png", width: 50, height: 50}} />
        <Text style={{fontSize:24}}>CSS</Text>
        <Image source={{uri: "https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png", width: 50, height: 50}} />
        
    </ScrollView>       
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  highlight: {
    color: '#FF0000',
  }
});
