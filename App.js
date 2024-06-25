import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const ButtonCostum = ({ text, color }) => {
  return (
    <View style={{
      backgroundColor: color,
      width: 250,
      height: 100,
      borderRadius: 20,
      justifyContent: 'center',
      marginBottom: 10
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </View>
  )
}

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ButtonCostum text= "LOGIN" color= "red" />
      <ButtonCostum text= "LOGUOT" color= "green" />
      <ButtonCostum text= "REGIS" color= "black" />
    </View>
  )
}
export default App