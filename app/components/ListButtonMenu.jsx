import React from 'react'
import { StyleSheet, ScrollView, Dimensions} from 'react-native'
import { Button } from 'react-native-paper'


const { width } = Dimensions.get('screen')

const ListButtonMenu = () => {
  const handleButton = (event) => {
    event.preventDefault()
    alert('hello world')
  }
  return (
    <ScrollView horizontal={true} style={styles.buttonContainer}>
        <Button onPress={handleButton} mode="contained" style={{...styles.button, marginRight: 10}}>Add Property</Button>
        <Button onPress={handleButton} mode="contained" style={{...styles.button, marginRight: 10}}>Add Property</Button>
        <Button onPress={handleButton} mode="contained" style={{...styles.button, marginRight: 10}}>Add Property</Button>
        <Button onPress={handleButton} mode="contained" style={{...styles.button, marginRight: 10}}>Add Property</Button>
        <Button onPress={handleButton} mode="contained" style={{...styles.button, marginRight: 10}}>Add Property</Button>
        <Button onPress={handleButton} mode="contained" style={{...styles.button, marginRight: 10}}>Add Property</Button>
      </ScrollView>
  )
}

export default ListButtonMenu

const styles = StyleSheet.create({
  buttonContainer : {
    marginTop: 10,
    width: "100%",
  },
  button: {
    width: Math.floor(width/2)
  }
})
