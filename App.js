import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const TextInputCostum = ({ placeholder, color, typeKeybooard }) => {
  return (
    <TextInput
    placeholder= {placeholder}
    keyboardType= {typeKeybooard}
    style={{
      width: 250,
      height: 50,
      borderColor: color,
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 10,
      paddingLeft: 15
    }}></TextInput>
  )
}
const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TextInputCostum placeholder="Username" color="black" />
      <TextInputCostum placeholder="Password" color="black" />
      <TextInputCostum placeholder="Gmail" color="black" />
    </View>
  )
}
export default App