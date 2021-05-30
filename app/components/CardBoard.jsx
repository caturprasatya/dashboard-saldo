import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';


const { width } = Dimensions.get('screen')

const CardBoard = () => {

  const day = moment();
  const date = day.format("DD-MMM-YYYY").split("-").join(" ");
  const time = day.format('HH:MM')

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
              <Image source={require('../../assets/mask_group_157.svg')} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Income</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={require('../../assets/mask_group_159.svg')} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Expence</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={require('../../assets/mask_group_160.svg')} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Occupied Room</Text>
          </View>
          <View style={styles.cardGroup}>
            <View style={styles.cardPatch}>
              <Image source={require('../../assets/mask_group_161.svg')} style={styles.logo} width="80%" height="80%"></Image>
            </View>
            <Text style={styles.text}>Empty Room</Text>
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
    height : 200,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 17,
    marginTop: -60
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
