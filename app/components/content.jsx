import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Button } from 'react-native-paper';
import {useFonts,Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListItemTransaction from '../components/listItemTransaction.jsx';

const { width } = Dimensions.get('window')

const Content = () =>  {
  let [fontsLoaded] = useFonts({Poppins_700Bold,Poppins_600SemiBold,Poppins_500Medium})
    if (!fontsLoaded) {
        return <Text>loading</Text>;
    }

    const date = new Date().toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    })

    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false })

    const convertRp = saldo => {
      return `Rp ${(saldo/1000000).toFixed(1)}Jt`
    }

    const handleButton = (event) => {
      event.preventDefault()
      alert('hello world')
    }


  return (
    <View style={styles.content}>
      <LinearGradient colors={['#FFFFFF', '#EBF1F8']} style={styles.card}>
        <View style={styles.header}>
          <Text style={{...styles.desaName, fontSize: 12, color: 'black'}}>Monthly Total</Text>   
          <Text style={{...styles.desaName, fontSize: 12, color: 'black'}}>Last Update { date }, { time }</Text>
        </View>
        <View style={styles.line}></View>
        <View style={{flexDirection:"column",justifyContent:"space-between", height: "100%"}}>
            <Text style={styles.desaName}>ZipKos</Text>
            <View>
                <Text style={styles.judulSaldo}>Balance</Text>
                <Text style={styles.saldo}>{convertRp(1500000)}</Text>
            </View>
        </View>
      </LinearGradient>
      <View style={styles.buttonContainer}>
          <Button onPress={handleButton} mode="contained" style={{flexGrow: 1, marginRight: 10}}>Pay</Button>
          <Button onPress={handleButton} mode="contained" style={{paddingTop:0}}>
              <Icon name="commenting-o" style={{fontSize:20}}></Icon>
          </Button>
      </View>
      <View style={{marginTop:15, height:400}}>
          <Text style={{...styles.desaName, color:"#665EDC"}}>Transaction</Text>
          
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 10,
    backgroundColor: '#ecf0f1',
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  card:{
    marginTop: 10,
    backgroundColor: "red",
    width : "100%",
    height : 200,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 17,
    marginTop: -43
},
  desaName:{
    fontFamily:'Poppins_700Bold',
    fontSize: 25,
    color: "white",
  },
  judulSaldo:{
    fontFamily:'Poppins_600SemiBold',
    fontSize: 20,
    color: "white",
    paddingLeft: 6,
    marginBottom: 0
  },
  saldo:{
    fontFamily:'Poppins_600SemiBold',
    fontSize: 12,
    color: "white",
  },
  ilustrasi :{
      position: "absolute",
      bottom: 25,
      right :20,
      width: 120,
      height: 100,
      opacity: 0.5
  },
  buttonContainer : {
      flexDirection: "row",
      marginTop: 10
  },
  content:{
    position:"relative",
    padding: 20,
    backgroundColor:"white", 
    width: "100%", 
    height:600,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  line: {
    height: 1,
    marginTop: 2,
    width: "100%",
    backgroundColor: 'black'
  }
});


export default Content