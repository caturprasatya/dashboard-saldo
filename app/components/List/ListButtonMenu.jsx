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
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1, justifyContent:"space-around"}]}>
          <Icon name="ios-home" color="white" size={20} style={{flexGrow: 1, alignSelf: 'center', marginRight: 3}}/>
          <Text style={styles.text}>Add Property</Text>
        </Button>
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1, justifyContent:'space-around'}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/sofa.png?alt=media&token=11c09e10-889e-4b23-a71a-3397d03ea9d0'}}></Image>
          <Text style={styles.text}>Manage Room</Text>
        </Button>
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1, justifyContent:"space-around"}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/budget.png?alt=media&token=15936fe4-4c7c-4d94-94e9-1f446df2ae66'}}></Image>
          <Text style={styles.text}>Kost Expenses</Text>
        </Button>
  
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1, justifyContent:"space-around"}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/businessman.png?alt=media&token=0246d79d-5dee-4b59-952b-bd49830885df'}}></Image>
          <Text style={styles.text}>Staff Management</Text>
        </Button>
  
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1, justifyContent:"space-around"}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/service.png?alt=media&token=0d4db4bb-d0d1-4f52-89f0-8f0b8f3be010'}}></Image>
          <Text style={styles.text}>Staff List</Text>
        </Button>
  
        <Button onPress={handleButton} mode="contained" uppercase={false} color="#4db7c2" style={[styles.button, {marginRight: 10, flexDirection: 'row', flex: 1, justifyContent:"space-around"}]}>
          <Image style={styles.icon} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/instruction.png?alt=media&token=0f391f70-7e6c-4600-aebf-b29b605d85ed'}}></Image>
          <Text style={styles.text}>Guidelines</Text>
        </Button>
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
    marginBottom: 0,
    paddingHorizontal: 4,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  text:{
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#ffffff',
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginHorizontal:20
  }
})
