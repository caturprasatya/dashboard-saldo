import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';


const { width } = Dimensions.get('screen')

const CardBoard = () => {

  const day = moment();
  const date = day.format("DD-MMM-YYYY").split("-").join(" ");
  const time = day.format('HH:MM')

  const income = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_159.png?alt=media&token=d2fa1de9-a552-4e2a-908a-ba27deaabd44'
  const expense = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_157.png?alt=media&token=ea1b4a36-b412-4dbc-9ccc-fb2687043626'
  const useRoom = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_160.png?alt=media&token=adb1eff1-e713-4ca9-8ab1-6db2123fca8b'
  const emptyRoom = 'https://firebasestorage.googleapis.com/v0/b/profile-app-48011.appspot.com/o/mask_group_161.png?alt=media&token=e2f59382-efd6-41a7-9644-ed1ba95f55b9'

  const convertRp = money => {
    if (money % 1000000 === 0) {
      return `${(money/1000000).toFixed()}Jt`
    } else {
      return `${(money/1000000).toFixed(1)}Jt`
    }   
  }

  return (
    <LinearGradient colors={['#F3FDFF', '#FFFFFF']} style={styles.card}>
        <View style={styles.header}>
          <Text style={{...styles.subCategory, fontSize: 15, color: 'black'}}>Monthly Total</Text>   
          <Text style={{...styles.subCategory, fontSize: 12, color: '#c8c2bc', fontFamily: 'Poppins_500Medium' }}>Last Update: { date }, { time }</Text>
        </View>
        <View style={styles.line}></View>
        <View style={{flex: 1, width: "100%", flexDirection: 'row'}}>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={{uri: income}} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Income</Text>
            <Text style={[styles.text, {fontSize: 20}]}>{convertRp(150000000)}</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={{uri: expense}} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Expence</Text>
            <Text style={[styles.text, {fontSize: 20}]}>{convertRp(25000000)}</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={{uri: useRoom}} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Occupied Room</Text>
            <Text style={[styles.text, {fontSize: 20}]}>358</Text>

          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={{uri: emptyRoom}} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Empty Room</Text>
            <Text style={[styles.text, {fontSize: 20}]}>10</Text>
          </View>
        </View>
      </LinearGradient>
  )
}

export default CardBoard

const styles = StyleSheet.create({
  card:{
    marginTop: 10,
    backgroundColor: "red",
    width : "100%",
    height : 230,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 17,
    marginTop: -60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  text:{
    alignSelf: 'center',
    fontSize: 12,
    marginTop: 5,
    color: '#45B3BE'
  },
  cardGroup: {
    flex: 1,
    minHeight: 50,
    flexDirection: "column",
    paddingTop: 20
  },
  logo:{
    width: "65%",
    height: "65%",
    alignSelf:'center',
    marginTop: 3.3,
    shadowColor: 'black'
  },
  cardPatch: {
    width: Math.floor(width/6),
    height: Math.floor(width/6),
    backgroundColor: "white",
    alignSelf: 'center',
    borderRadius: 20,
    padding: 8
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  line: {
    height: 1.3,
    marginTop: 8,
    width: "90%",
    backgroundColor: 'black',
    alignSelf: 'center'
  },
})
