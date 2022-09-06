import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState('');
  const [list, setList] = useState([]);


  function yhteenlasku(){
    const lasku = parseInt(a) + parseInt(b)
    setC(lasku)
    const x = a + " + " + b + " = " + lasku
    setList([...list, {key: x}])
  }

  function vahennys(){
    const lasku = parseInt(a) - parseInt(b)
    setC(lasku)
    const x = a + " - " + b + " = " + lasku
    setList([...list, {key: x}])
  }

  function clear(){
    setList([])
    setC('')
    setA(0)
    setB(0)
  }

  return (
    <View style={styles.container}>
      <Text>Tulos: {c}</Text>
      <TextInput style={styles.input} keyboardType='number-pad' textAlign={'center'} onChangeText={input => setA(input)} value={a}/>
      <TextInput style={styles.input} keyboardType='number-pad' textAlign={'center'} onChangeText={input => setB(input)} value={b}/>
      <View style={styles.button}>
        <Button style={styles.button} onPress={yhteenlasku} title='+'/>
        <Button style={styles.button} onPress={vahennys} title='-'/>
        <Button style={styles.button} onPress={clear} title='Clear All'/>
      </View>
      <FlatList 
        data={list}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 40,
    height: 40,
    marginBottom: 2,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button : {
    flexDirection: 'row',
    width: 100,
  }
});
