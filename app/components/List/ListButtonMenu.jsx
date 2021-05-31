import React from 'react'
import { StyleSheet, ScrollView, Dimensions, View, Text, Image} from 'react-native'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';

// import Sofa from '../../assets/couch.svg'


const { width } = Dimensions.get('screen')

const ListButtonMenu = () => {
  const handleButton = (event) => {
    event.preventDefault()
    alert('hello world')
  }

  return (
    <ScrollView horizontal={true} nestedScrollEnabled = {true} style={styles.buttonContainer}>
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1}]}>
          <Icon name="ios-home" color="white" size={20} style={{margin: 0}}/>
          <Text style={styles.text}>Add Property</Text>
        </Button>
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/couch.svg?alt=media&token=abbb7367-4a6f-45ec-8743-7d03c1e9af60'}}></Image>
          <Text style={styles.text}>Manage Room</Text>
        </Button>
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/budget.svg?alt=media&token=14af7eb5-b36e-4c59-bfe9-d67f23b4c919'}}></Image>
          <Text style={styles.text}>Kost Expenses</Text>
        </Button>
  
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/networking.svg?alt=media&token=97369205-3dc1-4553-80d4-96216d8e2b92'}}></Image>
          <Text style={styles.text}>Staff Management</Text></Button>
  
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/service.svg?alt=media&token=f0de7424-2cc4-4c83-bbe3-5d972a3fa33e'}}></Image>
          <Text style={styles.text}>Staff List</Text></Button>
  
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/instruction.svg?alt=media&token=d58a6c75-797a-4593-87f0-0cb962589c9d'}}></Image>
          <Text style={styles.text}>Guidelines</Text></Button>
      </ScrollView>
  )
}

export default ListButtonMenu

const styles = StyleSheet.create({
  buttonContainer : {
    marginTop: 18,
    width: "100%",
    marginBottom: 0
  },
  button: {
    width: Math.floor(width/2),
    height: 45,
    marginBottom: 0
  },
  text:{
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#ffffff',
    marginLeft: 3,
    flex: 2
  },
  icon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    flex: 1
  }
})
