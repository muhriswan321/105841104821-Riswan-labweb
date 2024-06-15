import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{
      //justifyContent=>baris
      //alignItems=>kolom
      marginTop: 400
      }}>
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'flex-center', marginLeft: 25
      }}>
      <View style={{
          width: 145, height: 40, backgroundColor: 'red', borderRadius: 15, justifyContent: 'center'
      }}>
          <Text style={{
            fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'
          }}>Login</Text>
      </View>  
      </View>
      <View style={{
        flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 25
      }}>
      <View style={{
        width: 145, height: 40, backgroundColor: 'blue', borderRadius: 15, justifyContent: 'center'
      }}>
          <Text style={{
            fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold'
          }}>Sing Up</Text>
      </View>
      </View>
    </View>
  )
}
export default App