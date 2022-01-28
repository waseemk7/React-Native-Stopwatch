import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

export default function App() {
  const [time,setTime]=useState(0);
  const [start,setStart] = useState(false);

  useEffect(()=>{
    let interval= null;

    if(start){
      interval = setInterval(()=>{setTime(prevTime => prevTime+10)},10)
    } else{
      clearInterval(interval);
    }

    return ()=> clearInterval(interval);
  },[start]);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Stopwatch
      </Text>
       <Text style={styles.paragraph}>
        {(("0"+Math.floor(time/60000)%60)).slice(-2)} : 
        {(("0"+Math.floor(time/1000)%60)).slice(-2)} :
        {(("0"+Math.floor(time/10)%1000)).slice(-2)} 

      </Text>
      <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
        <Button title="Reset" color="red" onPress={()=>{setTime(0); setStart(false)}} />
        <Button title={!start ? "Start" : "Stop"} color="blue" onPress={()=> {setStart(!start)}} />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
