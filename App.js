import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { StyleSheet, Text, View, Image,Button,Alert,TouchableOpacity } from 'react-native';
export default function App() {
  const [count, setCount] = useState(0);
  // create a variable which is called counter
  // to change the value of the variable, i will setCOunter method..
  // counter= counter + 1 <--in react will normally this
  // the initial value is 0
  return (
    <View style={styles.container}>
      <Text>Hello world !</Text>
      <Text>Im so happy</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images.samsung.com/is/image/samsung/assets/my/smartphones/galaxy-note20/buy/001-note20series-productimage-mo-720.jpg',
        }}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text style={styles.subHeader}>Counter example</Text>
      <Text>{counter}</Text>
      <TouchableOpacity onPress={()=> setCounter(counter+1)}>
      <Text style={{backgroundColor: "lightblue"}}>increment</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> setCounter(counter-1)}>
      <Text>decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=> setCounter(0)}>
      <Text>reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontsize:24,
    color: '#f00'
  },
  subHeader: {
    fontSize:18,
    color:'blue',
    marginTop:8
  },
  tinyLogo:{
    width:300,
    height: 400,
    marginTop:10
  },
  increament:{
    alignItems:" centre",
    backgroundColor:"blue",
    width:'100%',
    padding:10,
  },
  increament:{
    alignItems:" centre",
    backgroundColor:"blue",
    width:'100%',
    padding:10,
  },
  decreament:{
    alignItems:" centre",
    backgroundColor:"red",
    width:'100%',
    padding:10,
  },
  reset:{
    alignItems:" centre",
    backgroundColor:"green",
    width:'100%',
    padding:10,
  },
});